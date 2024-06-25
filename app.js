let listaDeNumerosSorteados = [];
let quantNumeros = 10;
let numSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirTelaInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numSecreto){
        exibirTextoNaTela('h1','Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('chute').setAttribute('disabled',false);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        if(chute > numSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        }else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function exibirTextoNaTela (tag,text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * quantNumeros + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosLista == quantNumeros){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
        
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reniciarJogo(){
    numSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled',false);
    document.getElementById('chute').removeAttribute('disabled');

}

function exibirTelaInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}