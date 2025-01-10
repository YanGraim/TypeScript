class Pessoa {
    readonly id: string = "123";
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    mostrarId() {
        console.log(`Id do usuario: ${this.id}`)
    }
}

const ana = new Pessoa("Ana", 25);

ana.mostrarId();
console.log(ana.id)
console.log(ana);