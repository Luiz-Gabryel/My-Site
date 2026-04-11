from fastapi import APIRouter

order_router = APIRouter(prefix="/order", tags=["order"])

@order_router.get("/lista")
async def estoque():
    """
    Essa é a rota padrão de auntentificação do nosso sistema
    """
    return {"mensagem": "Voce Acessou a rota de lista"}