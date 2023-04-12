const conn = require("../database/connection");

const addCliente = (req, res) => {
  const { nome, email, senha, telefone1, telefone2 } = req.body;

  const q = `INSERT INTO cliente VALUE (DEFAULT, '${nome}', '${email}', '${senha}', '${telefone1}', '${telefone2}')`;

  conn.query(q, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readCliente = (req, res) => {
  const q = `SELECT id, nome, email, telefone_1, telefone_2 FROM cliente`;

  conn.query(q, function (err, resp) {
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
  const { id } = req.params;

  const q = `DELETE FROM cliente WHERE id = ${id}`;

  conn.query(q, function (err, resp) {
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
