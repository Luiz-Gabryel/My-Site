from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import get_db, Livro, Usuario

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def inicio():
    return {"mensagem": "API funcionando"}

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