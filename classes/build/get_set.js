"use strict";
// Caso de uso de um jogo
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    //Metodo GET = Para pegar o valor ao inves de acessar diretamente a propriedade
    get getServidorIP() {
        console.log("== METODO GET ==");
        return this.servidor;
    }
    //Metodo SET = Passar / alterar algum atributo
    set setServidorIP(novoIp) {
        if (this.servidor === novoIp) {
            throw new Error("O novo IP deve ser diferente do IP antigo");
        }
        this.servidor = novoIp;
    }
}
const GTA5 = new Jogo("192.168.4.100");
try {
    GTA5.setServidorIP = "199.199.200";
    console.log(GTA5.getServidorIP);
}
catch (error) {
    const e = error;
    console.log("ERROR:", e.message);
}
// console.log(GTA5.getServidorIP)
