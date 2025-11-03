from pydantic_settings import BaseSettings
from pydantic import AnyHttpUrl
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "UPath API"
    DATABASE_URL: str
    CORS_ORIGINS: str | None = None

    @property
    def cors_list(self) -> List[AnyHttpUrl] | List[str]:
        if not self.CORS_ORIGINS:
            return []
        #  http://localhost:5173 ou http://127.0.0.1:5173
        return [o.strip() for o in self.CORS_ORIGINS.split(",") if o.strip()]


    class Config:
        env_file = ".env"

settings = Settings()
