const mongoose = require("mongoose");
const collection = "events";

const eventsSchema = {
    local:{type:String,required:true},
    visitante:{type:String,required:true},
    fecha:{type:String,required:true},
    hora:{type:String,required:true},
    estado:{type:String,required:true,default:"activo"},
    resultado:{type:String,required:true, default:"none"},
}
const options ={
    timestamps:true,
}

const schema = new mongoose.Schema(eventsSchema, options);

const Event =  mongoose.model(collection, schema);

module.exports = Event;