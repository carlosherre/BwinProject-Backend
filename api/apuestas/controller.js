const Apuesta = require("./model");

const listByApostador = async (req, res) =>{
    const {id_apostador} = req.body;
    const apuestas = await Apuesta.find(id_apostador);
    res.status(200).json({ apuestas })
}

const listByEvento = async (req, res) =>{
    const {id_evento} = req.body;
    const apuestas = await Apuesta.find(id_evento);
    res.status(200).json({ apuestas })
}

const createApuesta = async (req, res) =>{
    const {id_apostador, id_evento, monto, seleccion} = req.body;
    
    const apuesta = {
        id_apostador, id_evento, monto, seleccion
    }

    const newBet = new Apuesta(apuesta);
    newBet.save().then(createdApuesta=>{
        res.status(200).json({createdApuesta});
    })
}

const deleteApuesta = async (req, res) =>{
    const {id}=req.body;
    const apuesta = await Apuesta.deleteOne({_id:id});
    res.status(200).json({ apuesta });
}

module.exports = {
    listByApostador, listByEvento, createApuesta, deleteApuesta
}