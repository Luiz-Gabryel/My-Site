from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import get_db, Livro, Usuario
import bcrypt

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def hash_senha(senha: str) -> str:
    return bcrypt.hashpw(senha.encode(), bcrypt.gensalt()).decode()

def verificar_senha(senha: str, hash: str) -> bool:
    return bcrypt.checkpw(senha.encode(), hash.encode())

@app.get("/")
def inicio():
    return {"mensagem": "API funcionando"}

@app.post("/cadastro")
def cadastro(usuario: str, senha: str, db: Session = Depends(get_db)):
    existe = db.query(Usuario).filter(Usuario.usuario == usuario).first()
    if existe:
        raise HTTPException(status_code=400, detail="Usuário já existe")
    novo = Usuario(usuario=usuario, senha=hash_senha(senha))
    db.add(novo)
    db.commit()
    return {"mensagem": f"Usuário {usuario} criado com sucesso"}

@app.post("/login")
def login(usuario: str, senha: str, db: Session = Depends(get_db)):
    user = db.query(Usuario).filter(Usuario.usuario == usuario).first()
    if not user or not verificar_senha(senha, user.senha):
        raise HTTPException(status_code=401, detail="Usuário ou senha incorretos")
    return {"mensagem": f"Bem vindo, {usuario}", "usuario": usuario}

@app.get("/livros")
def ver_livros(db: Session = Depends(get_db)):
    livros = db.query(Livro).all()
    return livros

@app.post("/livros")
def adicionar_livro(nome: str, quantidade: int, db: Session = Depends(get_db)):
    livro = Livro(nome=nome, quantidade=quantidade)
    db.add(livro)
    db.commit()
    return {"mensagem": f"Livro {nome} adicionado"}

@app.delete("/livros/{nome}")
def remover_livro(nome: str, db: Session = Depends(get_db)):
    livro = db.query(Livro).filter(Livro.nome == nome).first()
    if not livro:
        raise HTTPException(status_code=404, detail="Livro não encontrado")
    db.delete(livro)
    db.commit()
    return {"mensagem": f"Livro {nome} removido"}

@app.get("/livros/{nome}")
def buscar_livro(nome: str, db: Session = Depends(get_db)):
    livro = db.query(Livro).filter(Livro.nome == nome).first()
    if not livro:
        raise HTTPException(status_code=404, detail="Livro não encontrado")
    return livro