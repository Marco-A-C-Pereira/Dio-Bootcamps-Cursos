"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let somaCampo = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldo = 0;
// ^variavel nunca muca de tipo, ela é convertida para String e alimentada para o inner
campoSaldo.innerHTML = String(saldo);
function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = String(saldo);
}
function limpaCampoSoma() {
    somaCampo.value = "";
}
function somarAoSaldo(somaValor) {
    if (somaCampo.value) {
        saldo += somaValor;
        campoSaldo.innerHTML = String(saldo);
        limpaCampoSoma();
    }
}
botaoAtualizar.addEventListener('click', function () {
    if (somaCampo) {
        somarAoSaldo(parseInt(somaCampo.value));
    }
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
