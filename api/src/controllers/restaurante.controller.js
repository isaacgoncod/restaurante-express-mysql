const conn = require("../database/connection");
const Restaurante = require("../models/Restaurante");

const addRestaurante = (req, res) => {
  let restaurante = new Restaurante(req.body);

  conn.query(restaurante.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readRestaurante = (req, res) => {
  let restaurante = new Restaurante(req.body);

  conn.query(restaurante.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const readRestHome = (req, res) => {
  const query = `SELECT r.nome, c.nome_cat, a.nota FROM restaurante r INNER JOIN categoria c ON c.id = r.categoria_id INNER JOIN avaliacao a ON r.id = a.restaurante_id`;

  conn.query(query, function (err, resp) {
    if (err) {
      res.status(400).json(err);
    }

    res.status(200).json(resp);
  });
};

const updateRestaurante = (req, res) => {
  const { id } = req.params;
  const { nome, categoriaId, rua, bairro, numero, complemento, cidade, uf } =
    req.body;

  const query = `UPDATE restaurante SET nome = '${nome}', categoria_id = ${categoriaId}, rua = '${rua}', bairro = '${bairro}', numero = '${numero}', complemento = '${complemento}',cidade = '${cidade}', uf = '${uf}'  WHERE id = ${id}`;

  conn.query(query, function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const deleteRestaurante = (req, res) => {
  let restaurante = new Restaurante(req.params);

  conn.query(restaurante.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

module.exports = {
  addRestaurante,
  readRestaurante,
  readRestHome,
  updateRestaurante,
  deleteRestaurante,
};
