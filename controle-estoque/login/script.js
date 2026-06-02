function verSenha() {
    var campo = document.getElementById('senha');
    campo.type = campo.type === 'password' ? 'text' : 'password';
}

function fazerLogin() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario === '') {
        alert('Preencha o usuário.');
        return;
    }

    if (!/^[A-ZÀ-Ú]/.test(usuario)) {
        alert('O usuário deve começar com letra maiúscula.');
        return;
    }

    if (senha.length < 8) {
        alert('A senha precisa ter pelo menos 8 caracteres.');
        return;
    }

    fetch("http://127.0.0.1:8000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            senha: senha
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.ok) {
            localStorage.setItem('usuario', usuario);
            location.href = '../pagina-inicial/pagina-inicial.html';
        } else {
            alert(data.msg);
        }
    })
    .catch(err => {
        console.log(err);
        alert("Erro ao conectar com o servidor");
    });
}