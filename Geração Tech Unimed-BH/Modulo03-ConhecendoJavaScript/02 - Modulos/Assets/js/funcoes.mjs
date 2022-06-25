import {textoP} from './exibString.mjs'
import {novapessoa} from './pessoaTemplate.mjs'

let pessoa = novapessoa();


function constructorCampos (){
    for (let c = 0; c < Object.keys(pessoa).length; c++ ) 
    {
        const PROP_OBJ = Object.keys(pessoa)[c];
        // console.log(Object.keys(pessoa)[c]);


        const DIV_OBJ = document.createElement('div');
        DIV_OBJ.setAttribute('id', PROP_OBJ);
        document.getElementById("inputLugar").appendChild(DIV_OBJ);

        const H2_OBJ = document.createElement('h2');
        H2_OBJ.innerHTML = PROP_OBJ.charAt(0).toUpperCase() + PROP_OBJ.slice(1);
        document.getElementById(DIV_OBJ.id).appendChild(H2_OBJ);

        const INPUT_OBJ = document.createElement('input');
        INPUT_OBJ.setAttribute('id', `input_${PROP_OBJ}`);
        INPUT_OBJ.setAttribute('placeholder', `Insira o(a) ${PROP_OBJ}`);
        document.getElementById(DIV_OBJ.id).appendChild(INPUT_OBJ);
    }
}

function constrObj(obj){
    const nomePessoa = Object.values(obj)[0];

    const SEC_OBJ = document.createElement('section');
    SEC_OBJ.setAttribute('id', `sec${nomePessoa}`);
    document.getElementById("exibePesoas").appendChild(SEC_OBJ);

    const DIV_BTN = document.createElement('div');
    DIV_BTN.setAttribute('id', `div${nomePessoa}`);
    document.getElementById(SEC_OBJ.id).appendChild(DIV_BTN);

    const LABEL = document.createElement('h2')
    LABEL.innerHTML = nomePessoa;
    document.getElementById(DIV_BTN.id).appendChild(LABEL);

    const BTN_OBJ_ALL = document.createElement('button');
    BTN_OBJ_ALL.innerHTML = "Todas informações";
    BTN_OBJ_ALL.setAttribute('id', "botaoAll");
    BTN_OBJ_ALL.setAttribute('class', 'accordion');;
    document.getElementById(DIV_BTN.id).appendChild(BTN_OBJ_ALL);

    const BTN_MTD_I = document.createElement('button');
    BTN_MTD_I.innerHTML = "Nome/Idade";
    BTN_MTD_I.setAttribute('id', "botaoI");
    BTN_MTD_I.setAttribute('class', 'accordion');
    document.getElementById(DIV_BTN.id).appendChild(BTN_MTD_I);

    const BTN_MTD_C = document.createElement('button');
    BTN_MTD_C.innerHTML = "Nome/Cidade";
    BTN_MTD_C.setAttribute('id', "botaoC");
    BTN_MTD_C.setAttribute('class', 'accordion');;
    document.getElementById(DIV_BTN.id).appendChild(BTN_MTD_C);

    const BTN_MTD_H = document.createElement('button');
    BTN_MTD_H.innerHTML = "Nome/Hobby";
    BTN_MTD_H.setAttribute('id', "botaoH");
    BTN_MTD_H.setAttribute('class', 'accordion');
    document.getElementById(DIV_BTN.id).appendChild(BTN_MTD_H);

    const PANEL = document.createElement('section');
    PANEL.setAttribute('class', 'panel');
    PANEL.setAttribute('id', `pan${nomePessoa}`);
    document.getElementById(SEC_OBJ.id).appendChild(PANEL);
    
}

function campoAtualID(c){
    const LISTA_ELEMENTOS = document.getElementById("inputLugar").childNodes;
        let elemento = LISTA_ELEMENTOS[c];
        //console.log(elemento.childNodes[1].id);
        return elemento.childNodes[1].id;
}

// Existe forma melhor 
// Acho que fiz uma gambiarra ?
function pegaKeyObj(c){
    return Object.keys(pessoa)[c]; 
}

function salvaLocal(obj){
    const key = Object.values(obj)[0];
    const content = JSON.stringify(obj);
    localStorage.setItem(key, content);
}

function submit() { 
    const pessoa1 = Object.create(pessoa);
    for (let c = 0; c < Object.keys(pessoa).length; c++ ) 
    {
        //console.log(campoatual(c))
        let valorcampo = document.getElementById(campoAtualID(c));
        //console.log (valorcampo.value);
        pessoa1[pegaKeyObj(c)] = valorcampo.value;
    }
    // console.log(pessoa1);
    // console.log(Object.keys(pessoa1));
    salvaLocal(pessoa1);
    constrObj(pessoa1);
}

function carregaLocal () {
    for (let i = 0; i < localStorage.length; i++) {
    let keyAtual = Object.keys(localStorage)[i];
    let json = localStorage.getItem(keyAtual);

    const obj = JSON.parse(json);
    
    constrObj(obj);
    }   
}

function pegaObjBtn (OBJ_NOME) {
    for (let i = 0; i < localStorage.length; i++) {
        let keyTemp = localStorage.key(i);
        let keyValue = localStorage.getItem(keyTemp);
        let objValue0 = Object.values(JSON.parse(keyValue))[0];
   
        let match = objValue0 == OBJ_NOME;
           
        if (match) { return (JSON.parse(keyValue)) }
    }
}

//Metodo geral paras os botoes.
function funcionalidadeBtn(secAlvo) 
{
    const BTN_ANY = secAlvo.target;
    const OBJ_NOME = BTN_ANY.parentNode.parentNode.childNodes[0].childNodes[0].innerHTML
    //O innerhtml é justamente gerado a partir da propriedade 0 que é o nome da pessoa. Meio gambiarra.

    const IF_BTN = BTN_ANY.matches('button');
    const TIPO_BTN = BTN_ANY.id;

    const PAN_ID = BTN_ANY.parentNode.parentNode.childNodes[1];
    //^ Espaço onde as informações serão exibidas 

    if (IF_BTN) 
    {
        PAN_ID.innerHTML = textoP(TIPO_BTN, pegaObjBtn(OBJ_NOME))
    }
};

export {
    funcionalidadeBtn,
    submit,
    constructorCampos,
    carregaLocal
}
