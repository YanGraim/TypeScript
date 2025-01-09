/*
    Herança > Quando nós temos uma classe que herda de outra classe
    ClassePAI tem seus atributos e a classeFILHA vai herdar todos os atributos do pai alem dos seus proprios atributos.
*/

class Usuario {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }
}

class Admin extends Usuario {
    cargo: string;
    nivel: number;

    constructor(nome: string, email: string, cargo: string, nivel: number) {
        // Chamando o construtor da classe pai
        super(nome,email)

        this.cargo = cargo;
        this.nivel = nivel
    }
}

const user1 = new Admin("Yan", "teste@teste.com", "Programador", 1)

console.log(user1);