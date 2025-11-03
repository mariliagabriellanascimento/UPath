from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.routes_auth import router as auth_router
from app.db.session import engine, Base


# Cria a aplicação FastAPI
app = FastAPI(title=settings.PROJECT_NAME)


# Configuração de CORS — libera o acesso do front-end (Vite)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_list or [
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Rotas principais
app.include_router(auth_router)


# Evento executado na inicialização do servidor
@app.on_event("startup")
async def on_startup():
    """
    Cria as tabelas no banco de dados automaticamente ao iniciar o servidor.
    (Apenas para ambiente de desenvolvimento — em produção use Alembic!)
    """
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


# Endpoint raiz opcional (só para testar se a API está rodando)
@app.get("/")
async def root():
    return {"message": "UPath API rodando com sucesso 🚀"}
