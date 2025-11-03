from passlib.context import CryptContext
from datetime import datetime, timedelta, timezone
from jose import jwt
from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    # bcrypt limitado a 72 bytes
    if len(password.encode("utf-8")) > 72:
        raise ValueError("Senha muito longa para bcrypt (máx 72 bytes).")
    return pwd_context.hash(password)


