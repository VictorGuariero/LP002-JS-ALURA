let secretNumber = gerarNumeroAleatorio();


/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo Secret Number 2.0';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

//Melhores práticas para o código acima
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo Secret Number 2.0');
exibirTexto('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
    let chute = document.querySelector('input').value
    console.log(chute == secretNumber);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}












