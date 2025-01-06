

// Tipo desconhecido > quando voce nao sabe o TIPO que vai receber.

let total: unknown;

total = 123;

total = "asd";

total = {
    nome: "asd",
    idade: 28
}

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;

// valor do tipo unknown só pode ser atribuido ao tipo unknown ou ao tipo any
let totalEntrega: unknown | any = totalPedido;