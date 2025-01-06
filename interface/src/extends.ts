

/*
    Vamos supor que temos um jogo e esse jogo pode ter uma dlc.
*/

interface IJogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: Array<string>;
}

const callOfDuty: IJogoProps = {
    id: "1",
    nome: "Call Of Duty - Warzone",
    descricao: "Jogo de ação e tiro / FPS",
    plataforma: ["Ps5", "Xbox", "PC"]
}

// console.log(callOfDuty); 

// interface IDLC extends IJogoProps{
//     novoConteudo: Array<string>;
// }

// const callOfDutyDLC: IDLC = {
//     id: "2",
//     nome: "Call of Duty - BlackOps",
//     descricao: "Jogo de ação e tiro / FPS / Campanha",
//     plataforma: ["Ps5", "Xbox", "PC"],
//     novoConteudo: ["Multiplayer", "Modo Campanha"]
// }

// console.log(callOfDutyDLC)


interface IDLC extends IJogoProps{
    jogoOriginal: IJogoProps;
    novoConteudo: Array<string>;
}

const callOfDutyDLC: IDLC = {
    id: "2",
    nome: "Call of Duty - BlackOps",
    descricao: "Jogo de ação e tiro / FPS / Campanha",
    plataforma: ["Ps5", "Xbox", "PC"],
    novoConteudo: ["Multiplayer", "Modo Campanha"],
    jogoOriginal: callOfDuty
}

console.log(callOfDutyDLC)