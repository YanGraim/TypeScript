/* 
    ### O que é uma classe? ###
    >> Uma classe armazena as caracteristicas e as ações que esse objeto vai possuir.
    >> Ou seja, conjunto de atributos e metodos.
*/

class Loja {
    //Atributos da nossa classe.
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }
}

const redBurguer = new Loja("Red Burguer", "Hamburgueria");
const sucos = new Loja("Sucao gelado", "Sucos")


console.log(redBurguer.nome);
console.log(sucos.nome);