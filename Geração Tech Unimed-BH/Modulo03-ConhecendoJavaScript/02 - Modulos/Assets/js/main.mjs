import {submit, funcionalidadeBtn, constructorCampos, carregaLocal} from './funcoes.mjs';

import {teste} from './controleCSS.mjs';

document.getElementById("cadastro").addEventListener('click', submit)
document.getElementById("exibePesoas").addEventListener('click', funcionalidadeBtn);


window.addEventListener('load', constructorCampos);
window.addEventListener('load', carregaLocal);
window.addEventListener('load', teste);
//document.getElementById("exibePesoas").addEventListener('load', teste);