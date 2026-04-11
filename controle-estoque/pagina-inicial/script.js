var nome = localStorage.getItem('usuario');
document.querySelector('.usuario').textContent = 'Olá, ' + nome;

var tema = 'claro';

function alternarTema() {
    if (tema == 'claro') {
        tema = 'escuro';
        document.documentElement.setAttribute('data-theme', 'escuro');
        document.getElementById('btn-tema').textContent = 'Mudar Tema';
    } else {
        tema = 'claro';
        document.documentElement.setAttribute('data-theme', 'claro');
        document.getElementById('btn-tema').textContent = 'Mudar Tema';
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

function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.style.display === 'flex') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'flex';
    }
}