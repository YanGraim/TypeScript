"use strict";
class Conta {
    constructor() {
        //Private: Ele nao pode ser acessado ou modificado fora da classe
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é de ${this.limite}`);
        }
        else {
            console.log("Infelizmente seu aumento de limite foi reprovado.");
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    solicitarLimiteApp(logado, quantidade) {
        if (logado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteAfiliado() {
        return this.solicitarLimite(150);
    }
}
const ciclano = new Conta();
ciclano.solicitarLimiteApp(true, 800);
console.log(ciclano);
console.log("===================");
const fulano = new BancoAfiliado();
fulano.limiteAfiliado();
console.log(fulano);
