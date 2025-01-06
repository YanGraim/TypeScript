"use strict";
// Como deixar um valor por default ou deixar ele opcional.
function cadastro(email, senha, nome = "teste", idade) {
    let data = {
        email,
        senha,
        nome,
        idade
    };
    console.log(data);
}
;
// cadastro("teste@teste.com", "teste123", "TESTE", 28);
function cadastroLoja(nome, email, status = false) {
    console.log("Status atual da loja: ", status);
    return status;
}
;
cadastroLoja("mcDonalds", "mcDonalds@mc.com");
