"use strict";
/* >> DECORATORS <<
    # Onde sao utilizados
        Class
        Propriedades
        Metodos
        Parametros (Bem pouco usado)
        Getters / Setters (Bem pouco usado)

    // Como criamos um decorator => Nada mais é que uma função
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target = recebe o construtor da nossa classe.
// function logInfo(target: any) {
//     console.log(target);
// }
// >>> Padrao factory (Fabrica) | Função que vai retornar a criação do decorator.
function logInfo(message) {
    return (target) => {
        // console.log(`${message}, ${target}`)
    };
}
let Sistema = class Sistema {
};
Sistema = __decorate([
    logInfo("Sevidor está rodando!")
], Sistema);
// ============ Praticando ============
function setIpServidor(novoIp) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = novoIp;
            }
        };
    };
}
let Servidor = class Servidor {
};
Servidor = __decorate([
    setIpServidor("192.168.40.50")
], Servidor);
const server1 = new Servidor();
console.log(server1);
