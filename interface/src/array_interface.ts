// interface ITecnologiaProps {
//     id: string;
//     nome: string;
//     slug: (string | number)[];
// }

// let tecnologia1: ITecnologiaProps = {
//     id: "1",
//     nome: "php",
//     slug: ["php", "php do zero", 12]
// }



interface ITecnologiaProps {
    id: string;
    nome: string;
    descricao?: string;
}

interface INomesProps {
    tecnologia: ITecnologiaProps[];
}

let frontend: INomesProps = {
    tecnologia: [
        { id: "1", nome: "ReactJS", descricao: "Biblioteca para criar interfaces"},
        { id: "2", nome: "VueJS"},
        { id: "3", nome: "Angular"}
    ]
    
}

console.log(frontend.tecnologia);