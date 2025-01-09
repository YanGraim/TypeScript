class Conta {
    //Private: Ele nao pode ser acessado ou modificado fora da classe
    private limite: number = 450;

    private aumentarLimite(quantidade: number) {
        if(quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é de ${this.limite}`);
        } else {
            console.log("Infelizmente seu aumento de limite foi reprovado.")
        }
    }

    protected solicitarLimite(quantidade: number) {
        return this.aumentarLimite(quantidade);
    }

    solicitarLimiteApp(logado: boolean, quantidade: number): void | boolean {
        if(logado){
            this.aumentarLimite(quantidade);
        } else {
            return false; 
        }
    }
}

class BancoAfiliado extends Conta {
    limiteAfiliado() {
        return this.solicitarLimite(150);
    }
}

const ciclano = new Conta();
ciclano.solicitarLimiteApp(true, 800)
console.log(ciclano)


console.log("===================")

const fulano = new BancoAfiliado();
fulano.limiteAfiliado();
console.log(fulano)