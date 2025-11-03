from uuid import UUID
from pydantic import BaseModel, EmailStr, ConfigDict, Field

# entrada (request) do cadastro
class UserCreate(BaseModel):
    email: EmailStr
    # limite 8–72 (bcrypt suporta até 72 bytes)
    password: str = Field(min_length=8, max_length=72)
    full_name: str | None = None

# saída (response) do cadastro / consulta
class UserOut(BaseModel):
    id: UUID
    email: EmailStr
    full_name: str | None = None
    is_active: bool

    # pydantic v2: permite carregar a partir de objetos ORM (SQLAlchemy)
    model_config = ConfigDict(from_attributes=True)

