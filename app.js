function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let menorNumero = parseInt(document.getElementById("menorNumero").value);
    let maiorNumero = parseInt(document.getElementById("maiorNumero").value);

    let numerosSorteados = [];
    while (numerosSorteados.length < quantidade){
        let numeroSorteado = gerarNumeroAleatorio(menorNumero, maiorNumero);
        if (numerosSorteados.indexOf(numeroSorteado) == -1){
            numerosSorteados.push(numeroSorteado);
        }
    }
    alert(numerosSorteados);
    document.getElementById("resultado").innerHTML = "Numeros Sorteados: " + numerosSorteados;
    
    let trocaClassBotao = document.getElementById("btn-reiniciar");
    trocaClassBotao.classList.remove("container__botao-desabilitado");
    trocaClassBotao.classList.add("container__botao");
}

function gerarNumeroAleatorio(menorNumero, maiorNumero){
    return Math.floor((Math.random() * (maiorNumero - menorNumero + 1)) + menorNumero);
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("menorNumero").value = "";
    document.getElementById("maiorNumero").value = "";
    document.getElementById("resultado").innerHTML = "";
    let trocaClassBotao = document.getElementById("btn-reiniciar");
    trocaClassBotao.classList.remove("container__botao");
    trocaClassBotao.classList.add("container__botao-desabilitado");
}