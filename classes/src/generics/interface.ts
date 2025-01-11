
// interface INovoProduto<T> {
//     nome: string;
//     preco: T;
// }

type NovoProduto<T extends number> = {
    nome: string;
    preco: T;
}

const arroz: NovoProduto<number> = {
    nome: "Arroz",
    preco: 8
}

console.log(arroz)