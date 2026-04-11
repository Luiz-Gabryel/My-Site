function verSenha() {
    var campo = document.getElementById('senha');
    if (campo.type == 'password') {
        campo.type = 'text';
    } else {
        campo.type = 'password';
    }
}

var tentativas = Number(localStorage.getItem('tentativas')) || 0;

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

    }

    if (!senhaValida) {
        alert('A senha precisa ter:\n' + erros);
        tentativas++;
        localStorage.setItem('tentativas', tentativas);
        if (tentativas >= 10) {
            localStorage.removeItem('tentativas');
            location.href = 'https://youtu.be/VH8AHeB-QBs?list=RDVH8AHeB-QBs';
        }
        return;
    }

    localStorage.removeItem('tentativas');
    localStorage.setItem('usuario', usuario);
    location.href = '../pagina-inicial/pagina-inicial.html';
