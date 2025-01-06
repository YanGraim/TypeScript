"use strict";
// function mostraPromocao(preco: number): void {
//     console.log(`Promoção no curso por apenas: R$ ${preco}`);
// }
const novoCurso = {
    id: "1",
    nome: "typescript",
    preco: 750,
    // promocao: mostraPromocao
    promocao: (preco) => {
        console.log("Preço total:", preco);
    }
};
let somaNumeros = (valor1, valor2) => {
    console.log("Resultado:", valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(15, 10);
console.log("O resultado da variavel é: ", resultado);
