"use strict";
// Decorator metodo, so é chamado quando nosso metodo for chamado em alguma local.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function verificarPessoa(age) {
    return (target, key, descriptor) => {
        // console.log(target);
        // console.log(key);
        // console.log(descriptor);
        const metodoOriginal = descriptor.value; // Salvar o metodo original
        // Reescrevendo o metodo
        descriptor.value = function () {
            if (age < 18) {
                // retornar o metodo original para ser executado
                console.log("Estamos cadastrando como pessoa menor de idade");
                return metodoOriginal.apply(this);
            }
            else {
                console.log("Adulto cadastrado no sistema");
                // retornar o metodo original para ser executado
                return metodoOriginal.apply(this);
            }
        };
    };
}
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema.`);
    }
}
__decorate([
    verificarPessoa(16)
], Pessoa.prototype, "cadastrarPessoa", null);
const user = new Pessoa("Yan G");
user.cadastrarPessoa();
