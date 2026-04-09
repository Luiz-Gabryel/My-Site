function fazerLogin() {
    var usuario = document.getElementById('usuario').value;
    localStorage.setItem('usuario', usuario);
    location.href = '../pagina-inicial/pagina-inicial.html';
}