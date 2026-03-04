import datetime
from fastapi import APIRouter, Depends, Request, Header, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Order, AccessToken
from app.config import settings
from typing import Optional, Dict

router = APIRouter(prefix="/api/webhooks", tags=["Webhooks"])

@router.post("/hotmart")
async def hotmart_webhook(request: Request, db: Session = Depends(get_db)):
    # Hotmart sends the webhook signing token in the 'hottok' header (or sometimes 'x-hotmart-hottok' depending on version)
    # Adapte caso necessário
    hottok = request.headers.get("hottok")
    if not hottok or hottok != settings.HOTMART_WEBHOOK_SECRET:
        raise HTTPException(status_code=401, detail="Unauthorized Token")

    payload = await request.json()
    
    # Payload format in Hotmart version 1/2 usually contains nested objects
    # "event": "PURCHASE_APPROVED", "data": {"transaction": "...", "buyer": {"email": "..."}}
    event = payload.get("event")
    data = payload.get("data", {})
    transaction = data.get("purchase", {}).get("transaction")
    if not transaction:
        transaction = data.get("transaction") # fallback for simpler payloads v2
        
    buyer_email = ""
    buyer_name = ""
    
    buyer_info = data.get("buyer", {})
    if buyer_info:
        buyer_email = buyer_info.get("email", "")
        buyer_name = buyer_info.get("name", "")

    if not transaction:
        return {"msg": "No transaction ID present, skipping"}

    db_order = db.query(Order).filter(Order.provider_reference == transaction).first()

    # If it is not found by transaction, try finding by "src" tracking parameter
    # Usually Hotmart sends `src` in tracking object
    tracking = data.get("tracking")
    if tracking and hasattr(tracking, 'get') and tracking.get('source'):
        src_uuid = tracking.get('source')
        if not db_order:
            db_order = db.query(Order).filter(Order.id == src_uuid).first()

    if not db_order:
        # Criar pedido tardio se o src falhou ou foi perdido
        db_order = Order(
            email=buyer_email,
            name=buyer_name,
            provider_reference=transaction,
            status="redirected",
            checkout_provider="hotmart"
        )
        db.add(db_order)
        db.flush()

    # Idempotency based on event
    if event in ["PURCHASE_APPROVED", "APPROVED"]:
        if db_order.status != "paid":
            db_order.status = "paid"
            db_order.paid_at = datetime.datetime.utcnow()
            db_order.email = buyer_email
            db_order.name = buyer_name
            db_order.provider_reference = transaction
            
            # Grant access
            db_order.access_granted_at = datetime.datetime.utcnow()
            # Generate Token
            token = AccessToken(order_id=db_order.id)
            db.add(token)

            # TODO: trigger async email here to buyer_email with frontend url ?token=xxx
    
    elif event in ["PURCHASE_REFUNDED", "REFUNDED"]:
        db_order.status = "refunded"
    
    elif event in ["PURCHASE_CHARGEBACK", "CHARGEBACK"]:
        db_order.status = "chargeback"

    db.commit()
    return {"msg": "Webhook processed cleanly"}
