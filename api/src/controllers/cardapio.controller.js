const conn = require("../database/connection");

const addCardapio = (req, res) => {
  const { restauranteId, descricao, valor } = req.body;

  const q = `INSERT INTO cardapio VALUE (DEFAULT, ${restauranteId}, '${descricao}', '${valor}')`;

  conn.query(q, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readCardapio = (req, res) => {
  const q = `SELECT * FROM cardapio`;

  conn.query(q, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const updateCardapio = (req, res) => {
  const { id } = req.params;
  const { restauranteId, descricao, valor } = req.body;

  const query = `UPDATE cardapio SET restaurante_id = '${restauranteId}', descricao = '${descricao}', valor = '${valor}' WHERE id = ${id}`;

  conn.query(query, function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const deleteCardapio = (req, res) => {
  const { id } = req.params;

  const q = `DELETE FROM cardapio WHERE id = ${id}`;

  conn.query(q, function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

module.exports = {
  addCardapio,
  readCardapio,
  updateCardapio,
  deleteCardapio,
};
