from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class OrderCreate(BaseModel):
    product_id: str = "AULAO_ANA_RITA"
    utm_source: Optional[str] = None
    utm_medium: Optional[str] = None
    utm_campaign: Optional[str] = None
    utm_content: Optional[str] = None
    referrer: Optional[str] = None

class OrderResponse(BaseModel):
    order_id: uuid.UUID
    checkout_url: str

class OrderStatusResponse(BaseModel):
    id: uuid.UUID
    status: str
    paid_at: Optional[datetime]
    access_granted_at: Optional[datetime]

# Hotmart Webhook simplificado (adapte os campos baseados na doc real)
class HotmartData(BaseModel):
    transaction: str
    buyer_email: str
    buyer_name: str
    status: str # "APPROVED", "REFUNDED", "CHARGEBACK"

class HotmartWebhookPayload(BaseModel):
    data: HotmartData
    event: str

class AccessResponse(BaseModel):
    link_grupo_vip: str
    link_evento: str
    buyer_name: Optional[str]
    buyer_email: Optional[str]
