"use strict";
// type NovoProduto<T extends number> = {
//     nome: string;
//     preco: T;
// }
const arroz = {
    nome: "Arroz",
    preco: 8,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        });
        return valorFormatado;
    },
};
console.log(arroz.formatar(arroz.preco));
