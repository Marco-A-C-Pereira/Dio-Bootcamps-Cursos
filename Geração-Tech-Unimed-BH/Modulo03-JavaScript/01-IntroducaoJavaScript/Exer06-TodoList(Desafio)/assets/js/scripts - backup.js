// //Brainstorm
// O plano inicial é criar um método que captura os conteúdos do textfield utilizando o botão adicionar, dentro do metodo do botao ele concatena a string mais a tag de <li> como uma forma de ... "array de lista".
// Depois é só utilizar um metodo para alterar o texto onde possui uma checkbox na lista

// Novo problema ! A lista reseta quando eu adiciono um novo elemento !
// Tenho que amazenar o checked em cada elemento
//As checkboxes tem elementos ... e se eu der um event listen pra pegar o ID da que eu cliquei pra poder acessar o numero do array ? 

//tarefas[] guarda a string toda que cria o elemento de checkbox.

var textInputWrap = document.getElementById("campoTarefa");

var count = 0;
const tarefas = [];
var idAtual = "";

function criaP(){ 
    let concat = `tarefa${count}`;
    tarefas[count] = 
    `
    <div>
    <input type="checkbox" name="${concat}1" id="${concat}"
    value="${textInputWrap.value}" nochecked>
    <label for="${concat}">${textInputWrap.value}</label>
    </div>
    `;
    //Criar metodo passar somente os parametros
    // console.log(tarefas[count], count);
    ++count;

    return tarefas; 
    // Eu fiz um metodo estatico com retorno ??
}

const pegaId = (event) => {
    // console.log(event);
    if ((event.target.id.includes('tarefa')) ) 
        {
            idAtual = `${(event.target.id)}`;
            console.log(`O ID autal é ${idAtual}`);
            return idAtual;
    }
}
// Ok pelo que entendi do tutorial eu criei um evento de click 
//que mira no ID ? 

function submit(){        
        document.getElementById("listaTasks").innerHTML = criaP();
}

// function mostraId(){
//     if (idAtual.includes('tarefa')) {
//             document.getElementById(idAtual).checked = true;
//             console.log(document.getElementById(idAtual).checked);
//         }
// }

const estadoCheckbox = (event) => {
    if ((event.target.id.includes('tarefa')) && (event.target.nodeName === "INPUT") ) {
        console.log(`Estado atual do check: ${document.getElementById(idAtual).checked}`);

        document.getElementById(idAtual).checked = !document.getElementById(idAtual).checked;
        
        console.log(`Estado alterado do check: ${document.getElementById(idAtual).checked}`);
        // let estado = ""
        // switch(document.getElementById(idAtual).checked){
        //     case true:
        //         estado = ""; 

        //         break;
                
        //     case false:
        //         estado = "checked"; 

        //         break;
        // }
    }
}

function mudaString(stringTarefa, feito){

}
// Objetivo é pegar o valor depois de Value e antes do fim da tag e se remover caso precisse


document.addEventListener('click', pegaId);
document.addEventListener('click', estadoCheckbox);

// if (idAtual){
// document.getElementById(idAtual).addEventListener('click', mostraId);
// } else { console.log (`Pq não funciona ? ${idAtual}`)}

//Novo desafio: Entender como passar esse document somente depois de inserir o primeiro ID
document.getElementById("addBut").addEventListener('click', submit);

// document.getElementById(function(){pegaId();}).addEventListener('click', mudacheckbox);
//document.getElementById(idAtual).addEventListener('click', mudacheckbox);

