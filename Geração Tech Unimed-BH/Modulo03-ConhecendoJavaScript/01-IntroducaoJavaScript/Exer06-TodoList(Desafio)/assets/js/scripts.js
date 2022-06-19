// //Brainstorm
// O plano inicial é criar um método que captura os conteúdos do textfield utilizando o botão adicionar, dentro do metodo do botao ele concatena a string mais a tag de <li> como uma forma de ... "array de lista".
// Depois é só utilizar um metodo para alterar o texto onde possui uma checkbox na lista

// Novo problema ! A lista reseta quando eu adiciono um novo elemento !
// Tenho que amazenar o checked em cada elemento
//As checkboxes tem elementos ... e se eu der um event listen pra pegar o ID da que eu cliquei pra poder acessar o numero do array ? 

//tarefas[] guarda a string toda que cria o elemento de checkbox.

var textInputWrap = document.getElementById("campoTarefa");
var checkboxId = document.getSelection


var count = 0;
const tarefas = [];
var idAtual = "";

function criaP(){ 
    let concat = `tarefa${count}`;
    tarefas[count] = 
    `<input type="checkbox" name="${concat}1" id="${concat}"
    value="${textInputWrap.value}">
    <label for="${concat}">${textInputWrap.value}</label>`;
    //Criar metodo passar somente os parametros
    // console.log(tarefas[count], count);
    ++count;

    return tarefas; 
    // Eu fiz um metodo estatico com retorno ??
}

const pegaId = (event) => {
    if ((event.target.id.includes('tarefa')) ) 
        {
            idAtual = `"${(event.target.id)}"`
            console.log(`O ID autal é ${idAtual}`)
            return idAtual;
    }
}
// Ok pelo que entendi do tutorial eu criei um evento de click 
//que mira no ID ? 

function submit(){        
        document.getElementById("listaTasks").innerHTML = criaP();
}

function mostraId(){
    if (idAtual.includes('tarefa')) {
        document.getElementById(idAtual).checked = true;
}

}

// function alteraCheckbox(){
//     pegaId();

// }


//window.addEventListener('click', mudacheckbox)
//document.addEventListener('click', alteraCheckbox);
document.addEventListener('click', pegaId);
document.addEventListener('click', mostraId);
document.getElementById("addBut").addEventListener('click', submit);

// document.getElementById(function(){pegaId();}).addEventListener('click', mudacheckbox);
//document.getElementById(idAtual).addEventListener('click', mudacheckbox);

