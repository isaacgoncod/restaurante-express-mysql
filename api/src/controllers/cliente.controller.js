const conn = require("../database/connection");
const Cliente = require("../models/Cliente");

const addCliente = (req, res) => {
  let cliente = new Cliente(req.body);

  conn.query(cliente.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

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

const updateCliente = (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, telefone1, telefone2 } = req.body;

  const query = `UPDATE cliente SET nome = '${nome}', email = '${email}', senha = '${senha}', telefone_1 = '${telefone1}', telefone_2 = '${telefone2}' WHERE id = ${id}`;

  conn.query(query, function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
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
  updateCliente,
  deleteCliente,
};
