import { applyMixins } from "./mixin/applyMixin"

class Automovel {
    ligar(): void {
        console.log("Automovel ligado");
    }

    desligar(): void {
        console.log("Automovel desligado");
    }
}

class Especificacao {
    descricao: string;

    constructor(descricao: string) {
        this.descricao = descricao;
    }
}

class Carro {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

interface Carro extends Automovel, Especificacao { }

applyMixins(Carro, [Automovel, Especificacao]);

const volkswagem = new Carro("Gol");
volkswagem.ligar();
volkswagem.descricao = "Ano 20/21, automatico, aro 17";

console.log(volkswagem);

volkswagem.desligar();