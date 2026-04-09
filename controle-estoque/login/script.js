var tentativas = Number(localStorage.getItem('tentativas')) || 0;

function fazerLogin() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == '') {
        alert('Preencha o usuário.');
        return;
    }

    if (usuario[0] == usuario[0].toLowerCase()) {
        alert('O usuário deve começar com letra maiúscula.');
        return;
    }

    var senhaValida = true;

    if (senha.length < 12) {
        senhaValida = false;
        alert('A senha deve ter no mínimo 12 caracteres.');
    }

    if (senha === senha.toLowerCase()) {
        senhaValida = false;
        alert('A senha deve ter pelo menos uma letra maiúscula.');
    }

    if (senha === senha.toUpperCase()) {
        senhaValida = false;
        alert('A senha deve ter pelo menos uma letra minúscula.');
    }

    if (!senha.toLowerCase().includes('luiz') && !senha.toLowerCase().includes('aster')) {
        senhaValida = false;
        alert('Senha incorreta.');
    }

    if (!senha.toLowerCase().includes('picos')) {
        senhaValida = false;
        alert('Senha incorreta.');
    }

    if (!senhaValida) {
        tentativas++;
        localStorage.setItem('tentativas', tentativas);
        if (tentativas >= 3) {
            localStorage.removeItem('tentativas');
            location.href = 'https://youtu.be/VH8AHeB-QBs?list=RDVH8AHeB-QBs';
        }
        return;
    }

    localStorage.removeItem('tentativas');
    localStorage.setItem('usuario', usuario);
    location.href = '../pagina-inicial/pagina-inicial.html';
}