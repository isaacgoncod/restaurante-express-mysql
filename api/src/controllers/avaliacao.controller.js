const conn = require("../database/connection");
const Avaliacao = require("../models/Avaliacao");

const addAvaliacao = (req, res) => {
  let avaliacao = new Avaliacao(req.body);

  conn.query(avaliacao.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readAvaliacao = (req, res) => {
  let avaliacao = new Avaliacao(req.body);

  conn.query(avaliacao.read(), function (err, resp) {
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
  let avaliacao = new Avaliacao(req.params);

  conn.query(avaliacao.delete(), function (err, resp) {
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
