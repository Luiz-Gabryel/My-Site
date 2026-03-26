    const valorPeca = Number(prompt("Qual o valor da peça?"))
    const valorMaoDeObra = Number(prompt("Qual o valor da Mão de Obra?"))
    const soma = valorPeca + valorMaoDeObra

    alert(`O valor total ficou ${soma}`)
    document.getElementById("resultado").innerText = `O valor total ficou R$ ${soma.toFixed(2)}`;

