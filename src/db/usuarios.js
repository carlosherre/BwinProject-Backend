import DB_CONFIG from '../config/config.json';//Se usa la configuracion de la base de datos que se realizo
import { MongoClient } from 'mongodb';
import { setUpSafeExit } from './watchers';

// Se contiene el método de conexión a la base de datos
let mongoDBClient = null;

export const connectToMongoDB = async () => {
    try {
        console.log("Conectandose a la base de datos")
        mongoDBClient = new MongoClient(DB_CONFIG.URL_DB);
        await mongoDBClient.connect();
        console.log("Conexion establecida");
        setUpSafeExit();//Configurar las salidas seguras
    } 
    catch (error) {
        console.log(`ERROR:: ${error}`)   
    }
}

export { mongoDBClient };