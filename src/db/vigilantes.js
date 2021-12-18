import { mongoDBClient } from "./client";

const safeExit = () => {
    mongoDBClient.close();
    console.log("Desconectado del servidor");
}

export const setUpSafeExit = () => {
    // Cierre normal de conexión
    process.on('exit', safeExit);

    // Cierres por señales
    process.on('SIGINT', safeExit);    
    process.on('SIGTERM', safeExit);
    process.on('SIGKILL', safeExit);

    // Si ocurre un error no controlado
    process.on('uncaughtException', safeExit);
}