"use strict";
/*
    ### O que é uma classe? ###
    >> Uma classe armazena as caracteristicas e as ações que esse objeto vai possuir.
    >> Ou seja, conjunto de atributos e metodos.
*/
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA!");
        }
        else {
            console.log("LOJA FECHADA!");
        }
    }
}
const redBurguer = new Loja("Red Burguer", "Hamburgueria");
redBurguer.criarLoja();
const retornoLoja = redBurguer.emitirPedido(8, "X-Burguer", "Batata Frita", "Combo programador feliz");
redBurguer.mudarStatus("FECHADO");
console.log(retornoLoja);
