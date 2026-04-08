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