var tentativas = 0;

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
    } else if (senha === senha.toLowerCase()) {
        senhaValida = false;
        alert('A senha deve ter pelo menos uma letra maiúscula.');
    } else if (senha === senha.toUpperCase()) {
        senhaValida = false;
        alert('A senha deve ter pelo menos uma letra minúscula.');
    } else if (!senha.includes('luiz') && !senha.includes('Luiz') && !senha.includes('aster') && !senha.includes('Aster')) {
        senhaValida = false;
        alert('Senha incorreta.');
    } else if (!senha.includes('picos') && !senha.includes('Picos')) {
        senhaValida = false;
        alert('Senha incorreta.');
    }

    if (!senhaValida) {
        tentativas++;
        if (tentativas >= 3) {
            location.href = 'https://youtu.be/VH8AHeB-QBs?list=RDVH8AHeB-QBs';
        }
        return;
    }

    localStorage.setItem('usuario', usuario);
    location.href = '../pagina-inicial/pagina-inicial.html';
}