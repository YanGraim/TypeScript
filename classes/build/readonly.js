"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    mostrarId() {
        console.log(`Id do usuario: ${this.id}`);
    }
}
const ana = new Pessoa("Ana", 25);
ana.mostrarId();
console.log(ana.id);
console.log(ana);
