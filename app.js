function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let menorNumero = parseInt(document.getElementById("menorNumero").value);
    let maiorNumero = parseInt(document.getElementById("maiorNumero").value);

    if (menorNumero > maiorNumero){
        alert("O 'Do número', ou seja, número inicial precisa ser menor que o 'Ate o número' (número maior).");
        return;
    }

    if ((maiorNumero - menorNumero + 1) < quantidade){
        alert("A quantidade de números a serem sorteados deve ser menor ou igual ao intervalo de números disponíveis.");
        return;
    }


    let numerosSorteados = [];
    while (numerosSorteados.length < quantidade){
        let numeroSorteado = gerarNumeroAleatorio(menorNumero, maiorNumero);
        if (numerosSorteados.indexOf(numeroSorteado) == -1){
            numerosSorteados.push(numeroSorteado);
        }
    }
    document.getElementById("resultado").innerHTML = numerosSorteados;
    
    if (quantidade > 0 && menorNumero > 0 && maiorNumero > 0){
        habilitarBotao();
    }
    
}

function habilitarBotao(){
    let trocaClassBotao = document.getElementById("btn-reiniciar");
    trocaClassBotao.classList.remove("container__botao-desabilitado");
    trocaClassBotao.classList.add("container__botao");
    trocaClassBotao.removeAttribute("disabled");
}

function gerarNumeroAleatorio(menorNumero, maiorNumero){
    return Math.floor((Math.random() * (maiorNumero - menorNumero + 1)) + menorNumero);
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("menorNumero").value = "";
    document.getElementById("maiorNumero").value = "";
    document.getElementById("resultado").innerHTML = "";
    desabilitarBotao();    
}

function desabilitarBotao(){
    let trocaClassBotao = document.getElementById("btn-reiniciar");
    trocaClassBotao.classList.remove("container__botao");
    trocaClassBotao.classList.add("container__botao-desabilitado");
    trocaClassBotao.setAttribute("disabled");
}