import uuid
import datetime
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Enum, text
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID

from app.database import Base

class Order(Base):
    __tablename__ = "orders"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, nullable=True)
    name = Column(String, nullable=True)
    status = Column(String, default="created")  # created, redirected, paid, refunded, chargeback, expired
    product = Column(String, default="AULAO_ANA_RITA")
    amount_cents = Column(Integer, default=2990)
    currency = Column(String, default="BRL")
    checkout_provider = Column(String, default="hotmart")
    provider_reference = Column(String, nullable=True, unique=True)
    checkout_url = Column(String, nullable=True)

    utm_source = Column(String, nullable=True)
    utm_medium = Column(String, nullable=True)
    utm_campaign = Column(String, nullable=True)
    utm_content = Column(String, nullable=True)
    referrer = Column(String, nullable=True)

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
    paid_at = Column(DateTime, nullable=True)
    access_granted_at = Column(DateTime, nullable=True)

    access_tokens = relationship("AccessToken", back_populates="order")

class AccessToken(Base):
    __tablename__ = "access_tokens"

    token = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    order_id = Column(UUID(as_uuid=True), ForeignKey("orders.id"))
    expires_at = Column(DateTime, nullable=True)
    used_at = Column(DateTime, nullable=True)

    order = relationship("Order", back_populates="access_tokens")
