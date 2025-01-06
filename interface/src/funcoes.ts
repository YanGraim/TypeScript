

interface ICursoProps {
    id: string;
    nome: string;
    preco: number;

    //Definir apenas a função e o que ela deve esperar (pode receber parametro ou nao) e retornar
    promocao: (preco: number) => void;
}


// function mostraPromocao(preco: number): void {
//     console.log(`Promoção no curso por apenas: R$ ${preco}`);
// }


const novoCurso: ICursoProps = {
    id: "1",
    nome: "typescript",
    preco: 750,
    // promocao: mostraPromocao
    promocao: (preco: number): void => {
        console.log("Preço total:", preco)
    }
}

// console.log(novoCurso);
// console.log(novoCurso.promocao(350));


interface ISomaProps {
    (valor1: number, valor2:number): number;
}

let somaNumeros: ISomaProps = (valor1: number, valor2: number): number => {
    console.log("Resultado:", valor1 + valor2)
    return valor1+valor2;
}

const resultado = somaNumeros(15, 10);
console.log("O resultado da variavel é: ", resultado);