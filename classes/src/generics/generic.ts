

// Generics
/*
    >>> Permite criar estruturas que serão adaptaveis a varios tipos de dados.
     (ajudando a reaproveitar melhor o codigo e deixa-lo mais flexivel)

    Podemos usar os generics:
    Funcoes | interface / type | classes
*/

/*
    Alguns padroes que voce vai encontrar: 
    S => State;
    T => Type;
    K => Key;
    V => Value;
    E => Element;
*/

function repositorio<T extends string | number>() {
    let dados: T;

    function getDados() {
        return dados;
    }

    function setDados(novoDado: T) {
        dados = novoDado;
    }

    return { getDados, setDados }
}

const repo = repositorio<string | number>();

repo.setDados("10");
repo.setDados(8);

console.log(repo.getDados());

const repo1 = repositorio();
repo1.setDados(18);
repo1.setDados("48");

console.log(repo1.getDados);