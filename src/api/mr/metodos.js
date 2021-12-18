import { ObjectId } from 'mongodb';
import { mongoDBClient } from '../../db/client';

//crearEvento+
//finalizarEvento(actualizar)+
//eliminarEvento+
//visualizarEvento(Todos-Activos)+
//--------------------------------------------
//crearApuesta(id apostador, monto y eleccion)+
//elminarApuesta+
//---------------------------------------------
//crearUsuario+
//visualizarUsuario(Todos)+
//actualizarUsuario(Contraseña)

//Eventos Inicio
export const crearEvento = async (newTask) => {
    const {local, visitante, fecha, hora } = newTask;
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("events")
        .insertOne({
            local:local,
            visitante:visitante,
            fecha:fecha,
            hora:hora,
            estado:"activo",
            resultado:"none",
            apuestas:[]
        });
}

export const finalizarEvento = async (taskId) => {
    const queryId = new ObjectId(taskId);
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("events")
        .updateOne({_id:queryId},
            {
                estado:"finalizado"
           }
        );
}

export const eliminarEvento = async (taskId) => {
    const queryId = new ObjectId(taskId);
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("events")
        .deleteOne({_id:queryId});
}

export const visualizarTodos = async () => {
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("events")
        .find().toArray();
}

export const visualizarActivos = async () => {
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("events")
        .find({estado:"activo"}).toArray();
}
//Eventos Fin

//Apuesta Inicio
export const crearApuesta = async (newTask) => {
    const {id_evento, id_apostador, monto, eleccion} = newTask;
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("apuestas")
        .insertOne(
            {
                id_evento:id_evento,
                id_apostador:id_apostador, 
                monto:monto,
                eleccion:eleccion
            });
}
export const eliminarApuesta = async (taskId) => {
    const queryId = new ObjectId(taskId);
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("apuestas")
        .deleteOne({_id:queryId});
}
//Apuesta Fin

//Usuarios Inicio
export const crearUsuario = async (newTask) => {
    const {nombre, apellido, celular, pais, email, password, tipo} = newTask;
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("users")
        .insertOne({
            nombre:nombre,
            apellido:apellido,
            celular:celular,
            pais:pais,
            email:email,
            password:password,
            tipo:tipo,
            saldo:0
        });
}

export const visualizarUsuario = async (taskId) => {
    const queryId = new ObjectId(taskId);
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("users")
        .findOne({_id:queryId});
}

export const actualizarUsuario = async (taskId) => {
    const {password} = newTask;
    const queryId = new ObjectId(taskId);
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("users")
        .updateOne({_id:queryId},
            {
                password:password
           }
        );
}

export const saldoUsuario = async (taskId) => {
    const {saldo} = newTask;
    const queryId = new ObjectId(taskId);
    return mongoDBClient
        .db("myFirstDatabase")
        .collection("users")
        .updateOne({_id:queryId},
            {
                nuevoSaldo:saldo+nuevoSaldo
           }
        );
}
//Usuarios Fin