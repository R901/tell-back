const express = require("express");

const routes = express.Router();
const UsersController = require("./controllers/usersController");

// Salva um documento na collection Tutoriais
routes.post("/Users", UsersController.store);
// Listar os documentos da collection Tutoriais
routes.get("/Users:email", UsersController.index);

module.exports =routes;
