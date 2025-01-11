
interface INovoProduto<T> {
    nome: string;
    preco: T;
    formatar(valor: T): string;
}

// type NovoProduto<T extends number> = {
//     nome: string;
//     preco: T;
// }

const arroz: INovoProduto<number> = {
    nome: "Arroz",
    preco: 8,
    formatar(valor: number): string {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        })
        return valorFormatado
    },
}

console.log(arroz.formatar(arroz.preco))