"use strict";
/*
    Vamos supor que temos um jogo e esse jogo pode ter uma dlc.
*/
const callOfDuty = {
    id: "1",
    nome: "Call Of Duty - Warzone",
    descricao: "Jogo de ação e tiro / FPS",
    plataforma: ["Ps5", "Xbox", "PC"]
};
const callOfDutyDLC = {
    id: "2",
    nome: "Call of Duty - BlackOps",
    descricao: "Jogo de ação e tiro / FPS / Campanha",
    plataforma: ["Ps5", "Xbox", "PC"],
    novoConteudo: ["Multiplayer", "Modo Campanha"],
    jogoOriginal: callOfDuty
};
console.log(callOfDutyDLC);
