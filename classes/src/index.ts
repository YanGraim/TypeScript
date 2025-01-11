import { connection, statusConnection } from "./database/connection"

function acessarSistema() {
    connection({ ip: "192.168.0.100", name: "SqlServer" })
}

acessarSistema();

statusConnection();