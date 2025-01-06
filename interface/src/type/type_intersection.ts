

type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

const produtoInfo: Info = {
    id: 1,
    nome: "Produto teste"
}

type Categoria = {
    slug: string;
    quantidadeProduto: number;
}

const categoria1: Categoria = {
    slug: "produtoooo",
    quantidadeProduto: 300
}

type ProdutoInfo = Info & Categoria; // ProdutoInfo é a intercessao (UNIAO) entre info e categoria

const novoProduto: ProdutoInfo = {
    id: 123,
    nome: "teclado rgb", 
    slug: "teclado mecanico",
    quantidadeProduto: 10
}

console.log(novoProduto);