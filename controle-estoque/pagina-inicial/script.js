var tema = 'claro';

function alternarTema() {
    if (tema == 'claro') {
        tema = 'escuro';
        document.documentElement.setAttribute('data-theme', 'escuro');
        document.querySelector('.toggle-tema').textContent = 'Claro';
    } else {
        tema = 'claro';
        document.documentElement.setAttribute('data-theme', 'claro');
        document.querySelector('.toggle-tema').textContent = 'Escuro';
    }
}

function abrirMenu(){
    var menu = document.getElementById('menu')
    var botao = document.getElementById('btn-menu')

    if (menu.classList.contains('aberto')){
        menu.classList.remove('aberto');
        botao.textContent = '≡';
    } else {
        menu.classList.add('aberto');
        botao.textContent = 'X';
    }
}