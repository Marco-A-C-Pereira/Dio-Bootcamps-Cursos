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
contador = valorContador();

// Devo querbar isso em metodos ? 
function novaTarefa(contAt, textAt){ 
    let divAtual = `Div${contAt}`;
    const  textotarefa = textAt;

// // Cria o primeiro Div
    const wrap = document.createElement('div');
    wrap.setAttribute("id", divAtual);
    
    document.getElementById("listaTasks").appendChild(wrap);
        
// // Cria a Checkbox
    const checkboxCaixa = document.createElement('input');
    checkboxCaixa.setAttribute("type", "checkbox");
    checkboxCaixa.setAttribute("id", contAt);
    checkboxCaixa.setAttribute("name", contAt);
    checkboxCaixa.setAttribute("value", textotarefa);

    document.getElementById(divAtual).appendChild(checkboxCaixa);

// // Cria um Label 
    const labelCheckox = document.createElement('label');
    labelCheckox.setAttribute("for",contAt);
    labelCheckox.innerHTML = textotarefa;

    document.getElementById(divAtual).appendChild(labelCheckox);

// // Cria icone delete

const btnDelete = document.createElement('input');
btnDelete.setAttribute("type", "image");
btnDelete.setAttribute("id", `Delete${contAt}`);
btnDelete.setAttribute("src", "assets/images/trashIcon.jpg");
btnDelete.setAttribute("width", "16px");
btnDelete.setAttribute("heigth", "16px");

document.getElementById(divAtual).appendChild(btnDelete);

// // Cria icone edit

const btnEdit = document.createElement('input');
btnEdit.setAttribute("type", "image");
btnEdit.setAttribute("id", `Edit${contAt}`);
btnEdit.setAttribute("src", "assets/images/EditIcon.png");
btnEdit.setAttribute("width", "16px");
btnEdit.setAttribute("heigth", "16px");

document.getElementById(divAtual).appendChild(btnEdit);

contador++;
}

function salvaMemoria (tarefaKey, tarefaContent){
    localStorage.setItem(tarefaKey, tarefaContent);
}

function criaTarefa(){
    const concatKey = `tarefa${contador}`;
    const conteudoTexto = textInput.value;

    novaTarefa(concatKey, conteudoTexto);
    salvaMemoria(concatKey, conteudoTexto);
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
divTarefas.addEventListener('click', function (objDelete) {
    const deleteTarget = objDelete.target;

    if ((objDelete.target.id.includes('Deletetarefa')) && 
        (deleteTarget.matches("input")))
         { 
            localStorage.removeItem(deleteTarget.parentNode.firstChild.id);
            deleteTarget.closest("div").remove();
         };
});

//Botão edit Checkbox estado
divTarefas.addEventListener('click' , function (objEdit) {
    const editTarget = objEdit.target;

    if ((objEdit.target.matches("input")) && 
        (objEdit.target.matches("[type = checkbox]")))   
        {
            console.log(editTarget.parentNode.firstChild.id);
            console.log(editTarget.parentNode.firstChild.checked);

            if (editTarget.parentNode.firstChild.checked) {
                console.log("Marcou verderiro salvar e adicionar simbolo checklist da Key");

                let editKey = localStorage.key(editTarget.parentNode.firstChild.id);
                let editValue = objEdit.target.parentNode.children.item(1).innerHTML;

                // // localStorage.key(editTarget.parentNode.firstChild.id) = "🗸";
                localStorage.setItem(`${editKey}🗸`, editValue);
             
                
                
                
               
                
            }   
            else {
                console.log("Marcou falso salvar e remove simbolo checklist da Key");
            }





        }

    if((objEdit.target.id.includes('Edit')) && 
       (objEdit.target.matches("input")))
       {
            console.log("Botaoedit funciona");
       }

})




// E se eu salvar as keys com caractere pra checked e na hora de exibir criar eui tratar essa string ? 