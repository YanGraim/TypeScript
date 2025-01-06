function login(username: string): boolean | string {
    let message = "Bem vindo(a), " + username;
    console.log(message);

    return username;
}

const retornoFuncao = login("Yan");
// console.log(retornoFuncao)

let n1: number = 4;
let n2: number = 4;

function soma(valor1: number, valor2: number): string {
    let soma = valor1 + valor2;
    if(soma >= 8) {
        return 'Soma maior ou igual que 8';
    } else { 
        return 'Soma menor que 8';
    }
}

console.log(soma(n1, n2));