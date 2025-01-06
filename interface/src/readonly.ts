// Apenas ler

interface IProdutoProps {
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto1: IProdutoProps = {
    id: "1",
    nome: "Tenis Nike",
    descricao: "Tenis para corrida"
}

// produto1.id = "123" (Não será possivel fazer isso pois a proprieda é foi definida como readonly)
produto1.nome = "tenis nike 2.0";
console.log(produto1)