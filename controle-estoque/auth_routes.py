from fastapi import APIRouter
from pymongo import MongoClient
import os

auth_router = APIRouter(prefix="/auth", tags=["auth"])

client = MongoClient(os.getenv("MONGO_URI"))
db = client["controle_estoque"]
usuarios = db["usuarios"]

@auth_router.post("/login")
async def login(dados: dict):
    usuario = usuarios.find_one({
        "nome": dados["usuario"],
        "senha": dados["senha"]
    })

    if usuario is None:
        return {"ok": False, "msg": "Login inválido"}

    return {"ok": True, "msg": "Login OK"}