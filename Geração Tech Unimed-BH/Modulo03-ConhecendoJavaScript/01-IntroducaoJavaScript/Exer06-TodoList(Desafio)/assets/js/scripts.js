var textInput = document.getElementById("campoTarefa");
var contador = 0;


// Devo querbar isso em metodos ? 
function novaTarefa(){ 
    let concat = `tarefa${contador}`;

// Cria o primeiro Div
    const wrap = document.createElement('div');
    wrap.setAttribute("id", `Div${concat}`);

    const textotarefa = document.createTextNode(textInput.value);
    
    document.getElementById("listaTasks").appendChild(wrap);
        
// Cria a Checkbox
    const checkboxCaixa = document.createElement('input');
    checkboxCaixa.setAttribute("type", "checkbox");
    checkboxCaixa.setAttribute("id", concat);
    checkboxCaixa.setAttribute("name", concat);
    checkboxCaixa.setAttribute("value", textInput.value);

    document.getElementById(`Div${concat}`).appendChild(checkboxCaixa);

// Cria um Label 
    const labelCheckox = document.createElement('label');
    labelCheckox.setAttribute("for",concat);
    labelCheckox.innerHTML = textInput.value;

    document.getElementById(`Div${concat}`).appendChild(labelCheckox);
    
// 
    contador++;
}

function submit(){        
    novaTarefa();
}

document.getElementById("addBut").addEventListener('click', submit);