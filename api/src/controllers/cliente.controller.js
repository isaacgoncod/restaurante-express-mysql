const conn = require("../database/connection");
const Cliente = require("../models/Cliente");

const addCliente = (req, res) => {
  let cliente = new Cliente(req.body);

  conn.query(cliente.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    cliente.addTelefone();

    res.status(201).json(resp).end();
  });
};

const readCliente = (req, res) => {
  let cliente = new Cliente(req.body);

  conn.query(cliente.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const deleteCliente = (req, res) => {
  let cliente = new Cliente(req.params);

  conn.query(cliente.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

module.exports = {
  addCliente,
  readCliente,
  deleteCliente,
};
