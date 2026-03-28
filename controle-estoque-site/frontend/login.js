const API = "https://estoque-livro-api.onrender.com"

function mostrarCadastro() {
    document.getElementById("form-login").style.display = "none"
    document.getElementById("form-cadastro").style.display = "block"
}

function mostrarLogin() {
    document.getElementById("form-cadastro").style.display = "none"
    document.getElementById("form-login").style.display = "block"
}

async function fazerLogin() {
    const usuario = document.getElementById("usuario").value
    const senha = document.getElementById("senha").value

    if (!usuario || !senha) {
        alert("Preencha todos os campos!")
        return
    }

    const response = await fetch(`${API}/login?usuario=${usuario}&senha=${senha}`, {
        method: "POST"
    })

    const data = await response.json()

    if (response.ok) {
        localStorage.setItem("usuario", usuario)
        window.location.href = "./index.html"
    } else {
        alert(data.detail)
    }
}

async function fazerCadastro() {
    const usuario = document.getElementById("novo-usuario").value
    const senha = document.getElementById("nova-senha").value

    if (!usuario || !senha) {
        alert("Preencha todos os campos!")
        return
    }

    const response = await fetch(`${API}/cadastro?usuario=${usuario}&senha=${senha}`, {
        method: "POST"
    })

    const data = await response.json()

    if (response.ok) {
        alert(data.mensagem)
        mostrarLogin()
    } else {
        alert(data.detail)
    }
}