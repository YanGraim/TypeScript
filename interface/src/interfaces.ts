// Interface é um conjunto ou padrão a ser seguido.



// let loja: object;

// loja = {
//     nome: "BK",
//     endereco: "Rua x",
//     status: true
// };

interface ILojaProps {
    nome: string;
    endereco: string;
    status: boolean;
};

const BurgerK: ILojaProps = {
    nome: "Burger K",
    endereco: "Rua logo ali",
    status: true
}

// console.log(BurgerK)

function novaLoja({nome, endereco, status}: ILojaProps): void {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Status da loja: ${status}`);
    console.log("=================================");
}

novaLoja({nome: "blue burguer", endereco: "Rua bem ali", status: false});
novaLoja({nome: "loja do amor", endereco: "Rua da paixa", status: true});