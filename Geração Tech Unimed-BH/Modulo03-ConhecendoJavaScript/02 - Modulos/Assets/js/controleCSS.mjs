//var acc = document.getElementsByClassName('accordion');

export function teste(){
var pessoasCadastradas =  document.getElementById("exibePesoas")
var acc = pessoasCadastradas.getElementsByClassName('accordion');
let mesmoBtn;
    for (let i = 0; i < acc.length ; i ++){
        acc[i].addEventListener('click', function() { 
           
            //console.log(this.parentNode.nextSibling);
            //console.log(this.parentNode.getElementsByClassName('accordion'));
            //console.log(acc);
            //console.log(this.parentNode.classList.contains("btnAtivo"));

            // Verifica se existe um botao ativo
            // Desativa todos ativos e ativa o clicado
            let estaAtivo;
            let botoesDoDiv = this.parentNode.getElementsByClassName('accordion');

            for (let i = 0; i < botoesDoDiv.length; i++) 
            {
            let temAtivo = botoesDoDiv[i].classList.contains("btnAtivo");
            
            if (temAtivo) {
                estaAtivo = botoesDoDiv[i];
                }
            }

            if (estaAtivo) {estaAtivo.classList.toggle("btnAtivo");}
            this.classList.toggle("btnAtivo");

            //

            // Pqp preciso achar uma forma de identificar se o mesmo botao foi pressionado
            console.log(mesmoBtn);
            console.log(this);
            
            if (mesmoBtn === this) { console.log("mesmo btn"); mesmoBtn=undefined}
            if (!mesmoBtn) {mesmoBtn = this}
            //

            var panel = this.parentNode.nextSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        })
    }
}