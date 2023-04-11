const conn = require("../database/connection");
const Cliente = require("../models/Cliente");

const authCliente = (req, res) => {
  let cliente = new Cliente(req.body);

  conn.query(cliente.auth(), function (err, resp) {
    if (err) {
      res.status(401).json(err).end();
    }
    if (resp.length == 0) {
      res.status(401).json({ msg: "Matricula ou Senha Inválidos" }).end();
    }

    let clientePass = resp[0];

    delete clientePass.senha;

    res.status(200).json(clientePass).end();
  });
};

module.exports = {
  authCliente,
};
