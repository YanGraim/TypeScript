
export function verificarPessoa(age: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // console.log(target);
        // console.log(key);
        // console.log(descriptor);

        const metodoOriginal = descriptor.value; // Salvar o metodo original

        // Reescrevendo o metodo
        descriptor.value = function () {
            if (age < 18) {
                // retornar o metodo original para ser executado
                console.log("Estamos cadastrando como pessoa menor de idade");
                return metodoOriginal.apply(this);
            } else {
                console.log("Adulto cadastrado no sistema");
                // retornar o metodo original para ser executado
                return metodoOriginal.apply(this);
            }
        }

    }
}