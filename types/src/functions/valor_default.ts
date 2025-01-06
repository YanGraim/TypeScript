// Como deixar um valor por default ou deixar ele opcional.

function cadastro(email: string, senha: string, nome = "teste", idade?: number): void {
    let data = {
        email,
        senha,
        nome,
        idade
    };
    console.log(data);
};

// cadastro("teste@teste.com", "teste123", "TESTE", 28);

function cadastroLoja(nome: string, email: string, status = false): boolean {
    console.log("Status atual da loja: ", status);
    return status;
};

cadastroLoja("mcDonalds", "mcDonalds@mc.com")