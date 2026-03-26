    //1 criar variavel para 'guardar' os elementos da tela
    const titulo = document.querySelector("#titulo-principal");
    const botaoMudar = document.querySelector("#botao-mudar");
    const botaoVoltar = document.querySelector("#botao-voltar");
    const botaoCurti = document.querySelector("#botao-curti");

    //2 ação (funcao)
    function transformarPagina(){
        titulo.innerText = 'Voce clicou e transformou nossa pagina' // testa se muda o texto
        titulo.computedStyleMap.color = "FFD700"; // vai pra douradoS
        document.body.style.backgroundColor = "#0000FF" //azul
    }

    function voltarPagina(){
        titulo.innerText = 'Olá, Pessoa!';
        titulo.style.color = "";
        document.body.style.backgroundColor = "";
    }

    function curtir(){
        titulo.innerText = 'Voce nos curtiu❤️'
        document.body.style.backgroundColor = "#FF0000" //vermelho
    }
    //3 se o botao aperta ele muda nossa cor do transformarPagina
    botaoMudar.onclick = transformarPagina;
    botaoVoltar.onclick = voltarPagina;
    botaoCurti.onclick = curtir;