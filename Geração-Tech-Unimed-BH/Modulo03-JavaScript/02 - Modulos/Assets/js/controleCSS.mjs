//var acc = document.getElementsByClassName('accordion');

export function teste(){
var pessoasCadastradas =  document.getElementById("exibePesoas")
var acc = pessoasCadastradas.getElementsByClassName('accordion');
let mesmoBtn;
    for (let i = 0; i < acc.length ; i ++){
        acc[i].addEventListener('click', function() { 
           
            const botoesDoDiv = this.parentNode.getElementsByClassName('accordion');


            if (mesmoBtn === this){this.classList.toggle("btnAtivo");}
            else {
                for(let btn of botoesDoDiv){
                btn.classList.remove('btnAtivo')}
            this.classList.toggle("btnAtivo");} 
            mesmoBtn = this;

            var panel = this.parentNode.nextSibling;
            console.log(panel.style.maxHeight);
            
            
            if (panel.style.maxHeight) {
                panel.style.padding = "0 1rem"
                panel.style.maxHeight = null;
            } else {
                panel.style.padding = "2rem 1rem"
                panel.style.maxHeight = panel.scrollHeight + "px";
            }

            console.log(panel.style.maxHeight);

        })
    }
}