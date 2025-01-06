// Afirmando algum tipo

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

// Afirmando que a variavel status atual é de fato um number
mudaStatus = statusAtual as number;

// outra maneira de afirmar o tipo
mudaStatus = <number>statusAtual;

// console.log(mudaStatus);

let query: unknown = "pizza";

let searchTerm: string = query as string;
console.log("Search TERM: ", searchTerm);