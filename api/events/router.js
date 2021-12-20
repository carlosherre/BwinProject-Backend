const express = require("express");
const {list, createEvent, listByEstado, finalizarEvento, eliminarEvento} = require("./controller");
const {validateCreateEvent} = require("../middlewares/validator");

const router = express.Router();

router.route("/").get(list).post(validateCreateEvent, createEvent).patch(finalizarEvento).delete(eliminarEvento);
router.route("/estado").get(listByEstado);

module.exports = router;