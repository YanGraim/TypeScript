"use strict";
/*
    Herança > Quando nós temos uma classe que herda de outra classe
    ClassePAI tem seus atributos e a classeFILHA vai herdar todos os atributos do pai alem dos seus proprios atributos.
*/
/*
    4 MODIFICADORES: Public, Private, Protected, readonly
*/
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(nome, email, cargo, nivel) {
        // Chamando o construtor da classe pai
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo() {
        console.log("Alterando cargo");
    }
}
const user1 = new Admin("Yan", "teste@teste.com", "Programador", 1);
user1.cargo = "Pintor";
user1.mudarCargo();
console.log(user1);
