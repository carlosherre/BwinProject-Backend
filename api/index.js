const express = require("express");
const users = require("./users/router");
const events = require("./events/router");
const apuestas = require("./apuestas/router");

const api= express();

api.use("/users", users);
api.use("/events", events);
api.use("/apuestas", apuestas);

module.exports = api;
