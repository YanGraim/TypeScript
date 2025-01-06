"use strict";
;
const novoUsuario = {
    email: "teste@teste.com",
    status: true
};
// console.log(novoUsuario);
function novoUser(usuario) {
    console.log(usuario.email);
    console.log(usuario.status);
}
novoUser({ email: "ana@ana.com", status: false });
