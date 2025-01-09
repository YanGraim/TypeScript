/*
    Herança > Quando nós temos uma classe que herda de outra classe
    ClassePAI tem seus atributos e a classeFILHA vai herdar todos os atributos do pai alem dos seus proprios atributos.
*/

/*
    4 MODIFICADORES: Public, Private, Protected, readonly

    >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da 
     classe em que foram criados e por meio das classes que forem filhas (que extende a classe pai).

    >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados,
     ou seja ele nao pode ser acessado ou modificado fora da classe em que foi criado.

    >> Readonly: (apenas para atributos) Podemos apenas ler e ver esse atributo porem 
     nao podemos alterar ele.
*/

class Usuario {
    protected id: number; // Podemos acessar somente na classe usuario ou classe que extends a classe usuario (classes filhas)
    nome: string;
    email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class Admin extends Usuario {
    cargo: string;
    nivel: number;

    constructor(id: number, nome: string, email: string, cargo: string, nivel: number) {
        // Chamando o construtor da classe pai
        super(id, nome, email)

        this.cargo = cargo;
        this.nivel = nivel
    }

    protected mudarCargo(cargo: string): void {
        console.log("Alterando cargo para:", cargo);
        console.group("Id do usuário:", this.id);
    }

    acessarAdmin() {
        this.mudarCargo("Programador")
    }
}

const user1 = new Admin(8, "Yan", "teste@teste.com", "Programador", 1)

// user1.id;


user1.acessarAdmin();
