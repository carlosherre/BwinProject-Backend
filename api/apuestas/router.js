const express = require("express");
const {listByApostador, listByEvento, createApuesta, deleteApuesta} = require("./controller");
const {validateCreateEvent} = require("../middlewares/validator");

const router = express.Router();

router.route("/").get(listByApostador).post(createApuesta).delete(deleteApuesta);
router.route("/xevento").get(listByEvento);
module.exports = router;