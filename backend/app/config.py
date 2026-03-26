from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://user:password@localhost/anarita"
    HOTMART_CHECKOUT_URL: str = "https://pay.hotmart.com/ABC12345"
    HOTMART_WEBHOOK_SECRET: str = "secret123"
    VIP_GROUP_URL: str = "https://chat.whatsapp.com/vip"
    EVENT_LINK_URL: str = "https://youtube.com/live"
    APP_BASE_URL: str = "http://localhost:3000"
    EMAIL_PROVIDER_KEY: str = ""

    class Config:
        env_file = ".env"

settings = Settings()
