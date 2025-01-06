"use strict";
// function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number {
//     const total = venda1 + venda2 + venda3 + venda4
//     console.log(total);
//     return total;
// }
// totalVendas(10, 20, 30, 40);
// Rest ...
function totalVendas(...vendas) {
    const quantiadeVendas = vendas.length;
    console.log(`Voce fez ${quantiadeVendas} vendas hoje`);
}
// totalVendas(10, 30, 25, 15, 90, 30)
function mostraNomes(...nomes) {
    let totalNomes = nomes.length;
    console.log(totalNomes);
    nomes.map((nome) => {
        console.log(nome);
    });
}
mostraNomes("Raimunda", "Wanessa", "Rodrigo");
