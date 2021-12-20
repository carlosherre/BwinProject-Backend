const mongoose = require("mongoose");
const collection = "apuestas";

const apuestaSchema = {
    id_apostador:{type:String,required:true},
    id_evento:{type:String,required:true},
    monto:{type:Number,required:true},
    seleccion:{type:String,required:true},
    estado:{type:String,default:"activo"},
}
const options ={
    timestamps:true,
}

const schema = new mongoose.Schema(apuestaSchema, options);

const Bet =  mongoose.model(collection, schema);

module.exports = Bet;