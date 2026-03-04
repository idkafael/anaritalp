import urllib.parse
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Order
from app.schemas import OrderCreate, OrderResponse, OrderStatusResponse
from app.config import settings

router = APIRouter(prefix="/api/order", tags=["Orders"])

@router.post("/create", response_model=OrderResponse)
def create_order(payload: OrderCreate, db: Session = Depends(get_db)):
    db_order = Order(
        product=payload.product_id,
        utm_source=payload.utm_source,
        utm_medium=payload.utm_medium,
        utm_campaign=payload.utm_campaign,
        utm_content=payload.utm_content,
        referrer=payload.referrer,
        status="created"
    )
    db.add(db_order)
    db.commit()
    db.refresh(db_order)

    # Build Checkout URL
    params = {
        "src": str(db_order.id), # tracking src parameter from Hotmart
    }
    
    # If UTMS, append them (some gateways accept these, hotmart accepts them natively as well)
    if payload.utm_source: params["sck"] = payload.utm_source # sck is source
    # you can map others safely here, this is basic 

    query_string = urllib.parse.urlencode(params)
    checkout_url = f"{settings.HOTMART_CHECKOUT_URL}?{query_string}"
    
    db_order.checkout_url = checkout_url
    db.commit()

    return OrderResponse(order_id=db_order.id, checkout_url=checkout_url)

@router.get("/{order_id}", response_model=OrderStatusResponse)
def get_order_status(order_id: str, db: Session = Depends(get_db)):
    try:
        import uuid
        uid = uuid.UUID(order_id)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid UUID")

    order = db.query(Order).filter(Order.id == uid).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")

    return OrderStatusResponse(
        id=order.id,
        status=order.status,
        paid_at=order.paid_at,
        access_granted_at=order.access_granted_at
    )
