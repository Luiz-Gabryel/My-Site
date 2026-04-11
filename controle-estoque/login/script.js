function verSenha() {
    var campo = document.getElementById('senha');
    if (campo.type == 'password') {
        campo.type = 'text';
    } else {
        campo.type = 'password';
    }
}

function fazerLogin() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == '') {
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

    localStorage.setItem('usuario', usuario);
    location.href = '../pagina-inicial/pagina-inicial.html';
}