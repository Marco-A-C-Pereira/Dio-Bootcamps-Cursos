var currentNumberWrapper = 
    document.getElementById('currentNumber');
var currentNumber = 0;

var butSub = 
    document.getElementsByName('subtrair');
var butAdd = 
    document.getElementsByName('adicionar');

var msgValorWrapper = 
    document.getElementById('mensagemValor');

//Operação dos botões
function increment() {
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber
}

//Verifica se negativo

function negCheck(){
    currentNumberWrapper.style["color"] =
        ((currentNumber < 0) ? "red" : "");
}

//Verificadores de valor

function msgValorShow(){
    switch (currentNumber) {
        case 0: 
            msgValorWrapper.innerHTML = "Adicione";
            break;

        case 10:
            msgValorWrapper.innerHTML = "Remova";
            break;

        default:
            msgValorWrapper.innerHTML = "";
    }
}

function valueCheck(){
    butAdd[0].style["background"] = 
        ((currentNumber >= 10) ? "grey" : "");

    butSub[0].style["background"] =
        ((currentNumber <= 0 ? "grey" : ""));
}

//limitador de numero

function limiterAdd(){
    if (currentNumber < 10){
        increment();
        valueCheck();
    }
}

function limiterSub(){
    if (currentNumber > 0){
        decrement();
        valueCheck();
    }
}

function butAdicionar() {
    negCheck();
    limiterAdd();
    msgValorShow();
}

function butSubtrair(){
    negCheck();
    limiterSub();
    msgValorShow();
}

//chamadas de método

window.addEventListener('load', valueCheck);
window.addEventListener('load', msgValorShow);
butAdd[0].addEventListener('click', butAdicionar);
butSub[0].addEventListener('click', butSubtrair);