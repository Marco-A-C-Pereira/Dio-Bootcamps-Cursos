// Novo Problema: Localstorage 
// Sinto que vou ter que reworkar ou pelo menos usar o meu metodo de nova tarefa para evocar a lista, preciso exibir o textinput e o estado do check (Objt secundario),

// Para isso vou precisar incluir 
// Metodo de Inserir no loca(Dentro do submit)
// Metodo de Delete do local no event listner de deleter
// Metodo "Read" exibir os primeiros dados;
//  - Pegar o Keyvalue é "fácil", só passar o valor da tarefa
//  - Pegar o Count direto em uma situação real seria problemática 
//  - Posso passar como Concat e depois encontrar uma fomra de contar todos os items no localstorage que contém o valor de tarefa para passar como valor no contador, e um loop de while para dicionar até não possuir itens repetidos (Quem sabe no futuro uma forma de manipular os valores dos keys para ficar bonitinho ? )

var textInput = document.getElementById("campoTarefa");

const divTarefas = document.getElementById("listaTasks");

//Metodo que vai contar as keys e retornar um valor para ser o numero do contador

function valorContador () { 
    let buffer = 0;

    for(let i; i < localStorage.length; i++){    
    if (localStorage.key.includes('tarefa')){
        buffer++;
    }
}
    return buffer;
}

var contador = 0;


// Devo querbar isso em metodos ? 
function novaTarefa(contAt, textAt){ 
    let divAtual = `Div${contAt}`;
    const  textotarefa = textAt;

// Cria o primeiro Div
    const wrap = document.createElement('div');
    wrap.setAttribute("id", divAtual);
    
    document.getElementById("listaTasks").appendChild(wrap);
        
// Cria a Checkbox
    const checkboxCaixa = document.createElement('input');
    checkboxCaixa.setAttribute("type", "checkbox");
    checkboxCaixa.setAttribute("id", contAt);
    checkboxCaixa.setAttribute("name", contAt);
    checkboxCaixa.setAttribute("value", textotarefa);

    document.getElementById(divAtual).appendChild(checkboxCaixa);

// Cria um Label 
    const labelCheckox = document.createElement('label');
    labelCheckox.setAttribute("for",contAt);
    labelCheckox.innerHTML = textotarefa;

    document.getElementById(divAtual).appendChild(labelCheckox);
    contador++;
// 

// // Cria icone delete

const btnDelete = document.createElement('input');
btnDelete.setAttribute("type", "image");
btnDelete.setAttribute("id", `Delete${contAt}`);
btnDelete.setAttribute("src", "assets/images/trashIcon.jpg");
btnDelete.setAttribute("width", "16px");
btnDelete.setAttribute("heigth", "16px");

document.getElementById(divAtual).appendChild(btnDelete);
}

function salvaMemoria (tarefaKey, tarefaContent){
    localStorage.setItem(tarefaKey, tarefaContent);
}

function criaTarefa(){
    const concatKey = `tarefa${contador}`;
    const conteudoTexto = textInput.value;

    novaTarefa(concatKey, conteudoTexto);
    salvaMemoria(concatKey, conteudoTexto);
    contador++;
}

function exibirTarefas() {
    for (let i = 0; i < localStorage.length; i++    ){ 
        if (localStorage.key(i).includes("tarefa") ){
        const retriveKeyTarefa   = localStorage.key(i);
        const retriveValueTarefa = localStorage.getItem(retriveKeyTarefa);
        
        novaTarefa (retriveKeyTarefa, retriveValueTarefa);
        }
    }
}


window.addEventListener('load', exibirTarefas);

document.getElementById("addBut").addEventListener('click', criaTarefa);

// Delegação de eventos aplicada
// Capturo o evento com a Function e se aplicar as condições removo o div mais próximo (Pai checkbox label icon);
divTarefas.addEventListener('click', function (e) {
    const target = e.target;

    if ((e.target.id.includes('Deletetarefa')) && 
        (target.matches("input")))
         { 
            localStorage.removeItem(target.parentNode.firstChild.id);
            target.closest("div").remove();
            
            
         };
});

