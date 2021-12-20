const Event = require("./model");

const list = async (req, res) =>{
    const eventos = await Event.find();
    res.status(200).json({ eventos })
}

const listByEstado = async (req, res) =>{
    const {estado}=req.body;
    const eventos = await Event.find(estado);
    res.status(200).json({ eventos })
}

const finalizarEvento = async (req, res) =>{
    const {id, resultado}=req.body;
    const eventos = await Event.updateOne({_id:id},{estado:"finalizado", resultado:resultado});
    res.status(200).json({ eventos })
}

const eliminarEvento = async (req, res) =>{
    const {id}=req.body;
    const eventos = await Event.deleteOne({_id:id});
    res.status(200).json({ eventos })
}

const createEvent = async (req, res) =>{
    const {local, visitante, fecha, hora, estado, resultado, apuestas} = req.body;
    
    const event = {
        local, visitante, fecha, hora, estado, resultado, apuestas
    }

    const newEvent = new Event(event);
    newEvent.save().then(createdEvent=>{
        res.status(200).json({createdEvent});
    })
}

module.exports = {
    list, createEvent, listByEstado, finalizarEvento, eliminarEvento
}