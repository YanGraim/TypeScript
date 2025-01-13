

// Decorator metodo, so é chamado quando nosso metodo for chamado em alguma local.


function verificarPessoa(age: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
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
            } else {
                console.log("Adulto cadastrado no sistema");
                // retornar o metodo original para ser executado
                return metodoOriginal.apply(this);
            }
        }

    }
}

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