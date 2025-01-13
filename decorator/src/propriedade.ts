// Propriedade decorator

function validaNome(tamanho: number) {
    // target = constructor da nossa classe
    // key = nossa propriedade
    return (target: any, key: string) => {
        let nome = target[key];

        const getter = () => nome;

        const setter = (value: string) => {
            if (value === "") {
                console.log("Você nao pode deixar em branco")
            } else if (value.length < tamanho) {
                console.log(`O nome ou o titulo deve conter mais que ${tamanho} caracteres`)
            } else {
                nome = value;
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}



class Jogo {
    @validaNome(5)
    nome: string;

    @validaNome(10)
    titulo: string;

    constructor(nome: string, titulo: string) {
        this.nome = nome;
        this.titulo = titulo;
    }
}

const jogo1 = new Jogo("Call of Duty", "Jogo");

console.log(jogo1.nome);
console.log(jogo1.titulo);