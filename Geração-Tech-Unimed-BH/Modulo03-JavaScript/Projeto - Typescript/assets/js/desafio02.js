"use strict";
let maria = { nome: "Maria", idade: 29, profissao: "Atriz", gen: "F" };
let roberto = { nome: "Roberto", idade: 19, profissao: "Padeiro", gen: "M" };
let laura = { nome: "Laura", idade: 32, profissao: "Atriz", gen: "F" };
let carlos = { nome: "Roberto", idade: 19, profissao: "Padeiro", gen: "NA" };
let pessoas = [maria, roberto, laura, carlos];
for (const pessoa of pessoas) {
    console.log(`${pessoa.nome}(${pessoa.gen}) tem ${pessoa.idade} e trabalha como ${pessoa.profissao}`);
}
