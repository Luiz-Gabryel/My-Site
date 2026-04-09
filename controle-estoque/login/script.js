var tentativas = 0;

function fazerLogin() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == '') {
        alert('Preencha o usuário.');
        return;
    }

    if (usuario[0] !== usuario[0].toUpperCase()) {
        alert('O usuário deve começar com letra maiúscula.');
        return;
    }

    if (senha.length < 12) {
        tentativas++;
        alert('A senha deve ter no mínimo 12 caracteres.');
    } else if (senha === senha.toLowerCase()) {
        tentativas++;
        alert('A senha deve ter pelo menos uma letra maiúscula.');
    } else if (senha === senha.toUpperCase()) {
        tentativas++;
        alert('A senha deve ter pelo menos uma letra minúscula.');
    } else if (!senha.includes('luiz') && !senha.includes('Luiz') && !senha.includes('aster') && !senha.includes('Aster')) {
        tentativas++;
        alert('Senha incorreta.');
    } else if (!senha.includes('picos') && !senha.includes('Picos')) {
        tentativas++;
        alert('Senha incorreta.');
    } else {
        localStorage.setItem('usuario', usuario);
        location.href = '../pagina-inicial/pagina-inicial.html';
        return;
    }

    if (tentativas >= 3) {
        location.href = 'https://youtu.be/VH8AHeB-QBs?list=RDVH8AHeB-QBs';
    }
}