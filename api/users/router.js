const express = require("express");
const {list, createUser, agregarSaldo} = require("./controller");
const {validateCreateUser} = require("../middlewares/validator");

const router = express.Router();

router.route("/").get(list).post(validateCreateUser, createUser).patch(agregarSaldo);

module.exports = router;
