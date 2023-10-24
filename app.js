let listaDeNumerosSorteados = []
let numerosDisponiveis = 10
let secretNumber = gerarNumeroAleatorio();
let tentativas = 1;
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo Secret Number 2.0';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


//Melhores práticas para o código acima
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female');
    
}
function exibirMensagensIniciais(){
    exibirTexto('h1', 'Jogo Secret Number 2.0');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
    
    
}

exibirMensagensIniciais();

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == secretNumber) {
        exibirTexto('h1', 'Isso aí.');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descubriu o Secret Number com ${tentativas}, ${palavraTentativas}`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > secretNumber){
            exibirTexto('h1','Tente Mais uma vez!');
            exibirTexto('p', 'O Secret Number é menor');
        } else{
            exibirTexto('h1', 'Tente novamente!');
            exibirTexto('p', 'O Secret Number é maior');
        }
          tentativas++;
          limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numerosDisponiveis + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numerosDisponiveis) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarGame(){
    secretNumber = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagensIniciais();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}











