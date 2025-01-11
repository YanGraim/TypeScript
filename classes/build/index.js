"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/connection");
function acessarSistema() {
    (0, connection_1.connection)({ ip: "192.168.0.100", name: "SqlServer" });
}
acessarSistema();
(0, connection_1.statusConnection)();
