const conn = require("../database/connection");

const addAvaliacao = (req, res) => {
  const { restauranteId, clienteId, dataAval, nota, descricao } = req.body;

  const q = `INSERT INTO avaliacao VALUE (DEFAULT, ${restauranteId}, ${clienteId}, '${dataAval}', ${nota}, '${descricao}')`;

  conn.query(q, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readAvaliacao = (req, res) => {
  const q = `SELECT * FROM avaliacao`;

  conn.query(q, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const updateAvaliacao = (req, res) => {
  const { id } = req.params;
  const { restauranteId, clienteId, dataAval, nota, descricao } = req.body;

  const query = `UPDATE avaliacao SET restaurante_id = '${restauranteId}', cliente_id = '${clienteId}', data_aval = '${dataAval}', nota = '${nota}', descricao = '${descricao}' WHERE id = ${id}`;

  conn.query(query, function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const deleteAvaliacao = (req, res) => {
  const { id } = req.params;

  const q = `DELETE FROM avaliacao WHERE id = ${id}`;

  conn.query(q, function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

module.exports = {
  addAvaliacao,
  readAvaliacao,
  updateAvaliacao,
  deleteAvaliacao,
};
