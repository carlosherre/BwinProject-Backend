const mongoose = require("mongoose");
const collection = "users";

const usersSchema = {
    nombre: {type: String, required:true},
    apellido: {type: String, required:true},
    celular: {type: String, required:true},
    pais: {type: String},
    email: {type: String, required:true},
    password: {type: String, required:true},
    tipo: {type: String, required:true},
    saldo: {type: Number},
}
const options ={
    timestamps:true,
}

const schema = new mongoose.Schema(usersSchema, options);

const User =  mongoose.model(collection, schema);

module.exports = User;