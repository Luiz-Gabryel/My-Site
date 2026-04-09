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

    var senhaValida = true;
    var erros = '';

    if (senha.length < 12) {
        senhaValida = false;
        erros += '- Mínimo 12 caracteres\n';
    }

    if (senha === senha.toLowerCase()) {
        senhaValida = false;
        erros += '- Pelo menos uma letra maiúscula\n';
    }

    if (senha === senha.toUpperCase()) {
        senhaValida = false;
        erros += '- Pelo menos uma letra minúscula\n';
    }

    if (!senha.toLowerCase().includes('luiz') && !senha.toLowerCase().includes('aster')) {
        senhaValida = false;
        erros += '- Senha incorreta\n';
    }

    if (!senha.toLowerCase().includes('picos')) {
        senhaValida = false;
        erros += '- Senha incorreta\n';
    }

    if (!senha.toLowerCase().includes('luiz') && !senha.toLowerCase().includes('aster')) {
    senhaValida = false;
    erros += '- Deve conter o nome do criador (luiz ou aster)\n';
    }       

    if (!senha.toLowerCase().includes('picos')) {
    senhaValida = false;
    erros += '- Deve conter a cidade do criador (picos)\n';
    } 
    if (!senha.includes('17')) {
    senhaValida = false;
    erros += '- Deve conter a idade do criador (17)\n';
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
}