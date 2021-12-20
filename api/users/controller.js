const User = require("./model");

const list = async (req, res) =>{
    const usuarios = await User.find();
    res.status(200).json({usuarios})
}

const createUser = async (req, res) =>{
    if(req.body.pais){
        const {nombre, apellido, celular, pais, email, password, tipo} = req.body;
        const userFound=await User.find({email})
        if(userFound.length===0){
            const user = {
                nombre, apellido, celular, pais, email, password, tipo, saldo:0
            }

            const newUser = new User(user);
            newUser.save().then(createdUser=>{
                res.status(200).json({createdUser});
            })
        }else{
            res.status(400).json({error: "Ese correo ya existe"});
        }
    }
    else{
        const {nombre, apellido, celular, email, password, tipo} = req.body;
        const userFound=await User.find({email})
        if(userFound.length===0){
            const user = {
                nombre, apellido, celular, email, password, tipo
            }

            const newUser = new User(user);
            newUser.save().then(createdUser=>{
                res.status(200).json({createdUser});
            })
        }else{
            res.status(400).json({error: "Ese correo ya existe"});
        }
    }
}

const agregarSaldo = async (req, res) =>{
    const {id, saldo}=req.body;
    const usuarios = await User.updateOne({_id:id},{saldo:saldo});
    res.status(200).json({ usuarios })
}

module.exports = {
    list, createUser, agregarSaldo
}