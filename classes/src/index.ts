import { connection, statusConnection } from "./database/connection"
import statusApp, { resertarBanco } from "./database/aplicativo";

function acessarSistema() {
    connection({ ip: "192.168.0.100", name: "SqlServer" })
}

acessarSistema();

statusConnection();

statusApp();

resertarBanco();