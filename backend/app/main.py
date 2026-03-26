from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.routers import order, webhook, access
from app.config import settings

# In tests or small scopes, create tables directly
# Note: In production we'd use alembic!
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Aulão API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.APP_BASE_URL, "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(order.router)
app.include_router(webhook.router)
app.include_router(access.router)

@app.get("/health")
def healthcheck():
    return {"status": "ok"}
