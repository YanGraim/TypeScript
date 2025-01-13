/* >> DECORATORS <<
    # Onde sao utilizados
        Class
        Propriedades
        Metodos
        Parametros (Bem pouco usado)
        Getters / Setters (Bem pouco usado)

    // Como criamos um decorator => Nada mais é que uma função
*/

// target = recebe o construtor da nossa classe.
// function logInfo(target: any) {
//     console.log(target);
// }

// >>> Padrao factory (Fabrica) | Função que vai retornar a criação do decorator.

function logInfo(message: string) {
    return (target: any) => {
        // console.log(`${message}, ${target}`)
    }
}

@logInfo("Sevidor está rodando!")
class Sistema {

}

// ============ Praticando ============

function setIpServidor(novoIp: string) {
    return (target: any) => { // target é o construtor da nossa classe
        return class extends target {
            ip = novoIp;
        }
    }
}

@setIpServidor("192.168.40.50")
class Servidor {
}

const server1 = new Servidor();

console.log(server1)