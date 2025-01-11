
interface INovoProduto<T> {
    nome: string;
    preco: T;
}

const arroz: INovoProduto<number> = {
    nome: "Arroz",
    preco: 10
}

console.log(arroz)