

interface ICadastroProps {
    nome?: string;
    email: string;
    status: boolean;
};

const novoUsuario: ICadastroProps = {
    email: "teste@teste.com",
    status: true
}

// console.log(novoUsuario);

function novoUser(usuario: ICadastroProps) {
    console.log(usuario.email)
    console.log(usuario.status)
}

novoUser({email: "ana@ana.com", status: false})