const express = require("express");
const mongoose = require("mongoose");

const server = express();
//A baixo, enviando pro server que vamos trabalhar com json
server.use(express.json());

// Conexão com o banco de dados (dados) na porta 27017
mongoose.connect("mongodb://localhost:27017/dados", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const routes = require("./routes");

server.use(routes);

server.listen(3347);