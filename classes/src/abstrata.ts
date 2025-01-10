
type DadosConta = {
    nome: string;
    conta: string;
    endereco: string;
}

abstract class ContaBanco {
    abstract abrirConta(dados: DadosConta): boolean;
}

class PessoaFisica extends ContaBanco {
    abrirConta(dados: DadosConta): boolean {
        console.log(`Nova conta P.Fisica criada com sucesso ${dados.nome}`)
        return true;   
    }
}

class PessoaJuridica extends ContaBanco {
    abrirConta(dados: DadosConta): boolean {
        console.log(`Nova conta P.Juridica criada com sucesso ${dados.nome}`)
        return true;
    }
}

const batman = new PessoaFisica();
batman.abrirConta({
    nome: "Bruce Wayne",
    conta: "77777-x",
    endereco: "Gotham City"
})

const tony = new PessoaJuridica();
tony.abrirConta({
    nome: "Industrias Stark",
    conta: "77777",
    endereco: "Nova York"
})