/*
    Herança > Quando nós temos uma classe que herda de outra classe
    ClassePAI tem seus atributos e a classeFILHA vai herdar todos os atributos do pai alem dos seus proprios atributos.
*/

/*
    4 MODIFICADORES: Public, Private, Protected, readonly
*/

class Usuario {
    public nome: string;
    public email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }
}

class Admin extends Usuario {
    public cargo: string;
    public nivel: number;

    constructor(nome: string, email: string, cargo: string, nivel: number) {
        // Chamando o construtor da classe pai
        super(nome,email)

        this.cargo = cargo;
        this.nivel = nivel
    }

    public mudarCargo(): void {
        console.log("Alterando cargo")
    }
}

const user1 = new Admin("Yan", "teste@teste.com", "Programador", 1)

user1.cargo = "Pintor"

user1.mudarCargo();

console.log(user1)