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

function abrirMenu() {
    var menu = document.getElementById('menu');
    var icone = document.getElementById('icone-menu');

    if (menu.classList.contains('aberto')) {
        menu.classList.remove('aberto');
        icone.className = 'fa-solid fa-angles-right';
    } else {
        menu.classList.add('aberto');
        icone.className = 'fa-solid fa-angles-left';
    }
}