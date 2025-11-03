from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError

from app.api.deps import get_db
from app.db.crud import get_user_by_email, create_user
from app.schemas import UserCreate, UserOut

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register", response_model=UserOut, status_code=status.HTTP_201_CREATED)
async def register(payload: UserCreate, db: AsyncSession = Depends(get_db)):
    # checagem rápida de duplicidade
    existing = await get_user_by_email(db, payload.email)
    if existing:
        raise HTTPException(status_code=400, detail="E-mail já cadastrado.")

    try:
        user = await create_user(
            db,
            email=payload.email,
            password=payload.password,
            full_name=payload.full_name,
        )
    except ValueError as e:
        # ex.: senha > 72 bytes (bcrypt) ou outra validação de hash
        raise HTTPException(status_code=400, detail=str(e))
    except IntegrityError:
        # proteção extra caso outra request crie o mesmo e-mail em race condition
        raise HTTPException(status_code=400, detail="E-mail já cadastrado.")

    # converte objeto SQLAlchemy -> schema (pydantic v2)
    return UserOut.model_validate(user)
