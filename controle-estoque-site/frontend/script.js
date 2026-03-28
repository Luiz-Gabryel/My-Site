const API = "http://127.0.0.1:8000"

async function carregarLivros() {
    const response = await fetch(`${API}/livros`)
    const livros = await response.json()

    const lista = document.getElementById("lista-livros")
    lista.innerHTML = ""

    if (livros.length === 0) {
        lista.innerHTML = "<li>Nenhum livro cadastrado.</li>"
        return
    }

    livros.forEach(livro => {
        lista.innerHTML += `<li>${livro.nome} - ${livro.quantidade} unidades</li>`
    })
}

async function adicionarLivro() {
    const nome = document.getElementById("nome-livro").value
    const quantidade = document.getElementById("qtd-livro").value

    if (!nome || !quantidade) {
        alert("Preencha todos os campos!")
        return
    }

    const response = await fetch(`${API}/livros?nome=${nome}&quantidade=${quantidade}`, {
        method: "POST"
    })

    const data = await response.json()
    alert(data.mensagem)
    carregarLivros()
}

carregarLivros()