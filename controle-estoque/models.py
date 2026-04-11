from sqlalchemy import create_engine, Column, String, Integer, Boolean, Float, ForeignKey
from sqlalchemy.orm import declarative_base, relationship

db = create_engine("sqlite:///banca.db")

banco = declarative_base()

# -------------------------
# USUARIO
# -------------------------
class Usuario(banco):
    __tablename__ = "usuario"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String)
    email = Column(String, nullable=False)
    senha = Column(String)
    ativo = Column(Boolean)
    permissoes = Column(Boolean, default=False)
    cargo = Column(String)

    pedidos = relationship("Pedido", back_populates="usuario")

    def __init__(self, nome, email, senha, ativo=False, permissoes=False):
        self.nome = nome
        self.email = email
        self.senha = senha
        self.ativo = ativo
        self.permissoes = permissoes


# usuario root
root = Usuario(
    nome="Administrador",
    email="root@system.com",
    senha="12032012@root",
    ativo=True,
    permissoes=True
)


# -------------------------
# LIVROS
# -------------------------
class Livro(banco):
    __tablename__ = "livros"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String)
    valor_venda = Column(Float)
    dono = Column(String)
    ano_lancamento = Column(Integer)
    exemplares = Column(Integer)
    exemplares_vendidos = Column(Integer)

    itens = relationship("ItemPedido", back_populates="livro")


# -------------------------
# PEDIDOS (a "caixa")
# -------------------------
class Pedido(banco):
    __tablename__ = "pedidos"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    status = Column(String)  # pendente, cancelado, entregue

    usuario_id = Column(Integer, ForeignKey("usuario.id"))
    usuario = relationship("Usuario", back_populates="pedidos")

    preco = Column(Float)  # total do pedido

    itens = relationship("ItemPedido", back_populates="pedido")


# -------------------------
# ITENS DO PEDIDO (os livros dentro)
# -------------------------
class ItemPedido(banco):
    __tablename__ = "itens_pedido"

    id = Column(Integer, primary_key=True, autoincrement=True)

    pedido_id = Column(Integer, ForeignKey("pedidos.id"))
    livro_id = Column(Integer, ForeignKey("livros.id"))

    quantidade = Column(Integer)
    valor_unitario = Column(Float)
    valor_total = Column(Float)

    pedido = relationship("Pedido", back_populates="itens")
    livro = relationship("Livro", back_populates="itens")