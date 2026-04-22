const inputidade = document.querySelector("#idade-usuario");
const botao = document.querySelector("#btn-verificar");
const mensagem = document.querySelector("#mensagem");

function checarEntrada(){
    const idade = Number(inputidade.value); 

    if (idade >= 18){
        mensagem.innerText = "Acesso Liberado";
        mensagem.style.color = "green";
        document.body.style.backgroundColor = "white";
    } else {
        mensagem.innerText = "Ja tem alguem com essa idade, nao pode";
        mensagem.style.color = "black";
    }
}

botao.onclick = checarEntrada;
