// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let somaCampo = document.getElementById('soma') as HTMLInputElement;

let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;
let saldo:number = 0;
// ^variavel nunca muca de tipo, ela é convertida para String e alimentada para o inner

campoSaldo.innerHTML = String(saldo);

function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = String(saldo);
}

function limpaCampoSoma(){
    somaCampo.value = "";
}

function somarAoSaldo(somaValor:number) {
    if (somaCampo.value) {
    saldo += somaValor;
    campoSaldo.innerHTML = String(saldo);
    limpaCampoSoma();
}
}

botaoAtualizar.addEventListener('click', function () {
    if(somaCampo) 
        { somarAoSaldo( parseInt(somaCampo.value))}
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