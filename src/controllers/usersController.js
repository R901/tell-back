const Users = require("../models/users");
module.exports = {
  async store(req, res) {
    // cadastrando usuário ou criando um documento usuário
    const user = await Users.create(req.body);
    return res.json(user);
  },
  async index(req, res) {
    // procurando usuário a partir do email
    const user = await Users.findOne({ Email: req.params.Email });
    return res.json(user);
  }
};