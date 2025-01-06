"use strict";
// Tipo desconhecido > quando voce nao sabe o TIPO que vai receber.
let total;
total = 123;
total = "asd";
total = {
    nome: "asd",
    idade: 28
};
let idPedido = 123;
let totalPedido = 15;
let entregador = idPedido;
// valor do tipo unknown só pode ser atribuido ao tipo unknown ou ao tipo any
let totalEntrega = totalPedido;
