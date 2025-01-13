import { verificarPessoa } from "./decorators/verificaPessoa"

// Decorator metodo, so é chamado quando nosso metodo for chamado em alguma local.


class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    @verificarPessoa(16)
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema.`)
    }
}

const user = new Pessoa("Yan G");

user.cadastrarPessoa();