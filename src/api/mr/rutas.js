import { Router } from 'express';
import { crearEvento, finalizarEvento, eliminarEvento, 
         visualizarTodos, visualizarActivos, crearApuesta, 
         eliminarApuesta, crearUsuario, visualizarUsuario, 
         actualizarUsuario, saldoUsuario } from './mr';

const router = Router();

router.get("/api/todos",async(pet, res) => {
    const todos = await visualizarTodos();
    res.json(todos);
})

router.get("/api/activos",async(pet, res) => {
    const todos = await visualizarActivos();
    res.json(todos);
})

router.get("/:taskId/usuarios",async(pet, res) => {
    const todos = await visualizarUsuario(pet.params.taskId);
    res.json(todos);
})

router.post("/api/apuesta", async(pet, res) => {
    const newTask = await crearApuesta(pet.params.newTask);
    res.json({message:"Se agrego una nueva apuesta", nuevoId=newTask.insertedId});
})

router.post("/api/usuario/crear", async(pet, res) => {
    const newTask = await crearUsuario(pet.params.newTask);
    res.json({message:"Se agrego un nuevo usuario", nuevoId=newTask.insertedId});
})

router.post("/api/evento", async(pet, res) => {
    const newTask = await crearEvento(pet.params.newTask);
    res.json({message:"Se agrego un nuevo evento", nuevoId=newTask.insertedId});
})

router.put("/:taskId/usuario/actualizar", async(pet, res) => {
    await actualizarUsuario(pet.params.taskId);
    res.json({messakIdge:"Se actualizó el usuario", nuevoId=pet.params.taskId});
})

router.put("/:taskId/usuario/saldo", async(pet, res) => {
    await saldoUsuario(pet.params.taskId);
    res.json({messakIdge:"Se actualizó el saldo", nuevoId=pet.params.taskId});
})

router.put("/:taskId/evento/finalizar", async(pet, res) => {
    await finalizarEvento(pet.params.taskId);
    res.json({messakIdge:"Se actualizó el evento", nuevoId=pet.params.taskId});
})

router.put("/api/", async(pet, res) => {
    await eliminarApuesta(pet.params.taskId);
    res.json({message:"Se eliminó la apuesta", nuevoId=pet.params.taskId});
})

router.put("/api/", async(pet, res) => {
    await eliminarEvento(pet.params.taskId);
    res.json({message:"Se eliminó el evento", nuevoId=pet.params.taskId});
})

export default router;