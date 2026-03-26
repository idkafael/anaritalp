from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import AccessToken, Order
from app.schemas import AccessResponse
from app.config import settings

router = APIRouter(prefix="/api/access", tags=["Access"])

@router.get("/resolve", response_model=AccessResponse)
def resolve_access(token: str = Query(...), db: Session = Depends(get_db)):
    ac_token = db.query(AccessToken).filter(AccessToken.token == token).first()
    
    if not ac_token:
        raise HTTPException(status_code=403, detail="Invalid token")

    # verify order status
    order = db.query(Order).filter(Order.id == ac_token.order_id).first()
    if not order or order.status != "paid":
        raise HTTPException(status_code=403, detail="Payment not confirmed or access denied")

    return AccessResponse(
        link_grupo_vip=settings.VIP_GROUP_URL,
        link_evento=settings.EVENT_LINK_URL,
        buyer_name=order.name,
        buyer_email=order.email
    )
