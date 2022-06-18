function retornaPar(array){
    let numpar =[]; // Não sei o que é let
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            numpar.push(array[i]);
        }
    }
    console.log(numpar);
}

// function prenchearray(){
//     for (let i = 0; i < 10; i++){
//         let aux = Math.floor(Math.random() * 20);
//         return array[i] = aux;
//     }
// }
// Desafio preencher arry com gerador de numeros.

let array = [];

for (let i = 0; i < 10; i++){
    array.push(Math.floor(Math.random() * 20));
}
// Consegui utilizando o funcao Math sem metodo;


retornaPar(array);

