const conn = require("../database/connection");

const addRestaurante = (req, res) => {
  const { nome, categoriaId, rua, bairro, numero, complemento, cidade, uf } =
    req.body;

  const q = `INSERT INTO restaurante VALUE (DEFAULT, '${nome}', ${categoriaId}, '${rua}', '${bairro}', '${numero}', '${complemento}', '${cidade}', '${uf}')`;

  conn.query(q, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readRestaurante = (req, res) => {
  const q = `SELECT * FROM restaurante`;

  conn.query(q, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const readRestHome = (req, res) => {
  const q = `SELECT r.nome, c.nome_cat FROM restaurante r INNER JOIN categoria c ON c.id = r.categoria_id`;

  conn.query(q, function (err, resp) {
    if (err) {
      res.status(400).json(err);
    }

    res.status(200).json(resp);
  });
};

const readRestHomeWhere = (req, res) => {
  const { cat } = req.query;

  const q = `SELECT r.id, r.nome, c.nome_cat FROM restaurante r INNER JOIN categoria c ON c.id = r.categoria_id WHERE c.nome_cat = '${cat}'`;

  conn.query(q, function (err, resp) {
    if (err) {
      res.status(400).json(err);
    }

    res.status(200).json(resp);
  });
};

const infoRest = (req, res) => {
  const { nome } = req.query;

  const q = `SELECT r.nome, r.rua, r.numero, r.bairro, r.cidade, r.uf, r.complemento, c.descricao, c.valor FROM restaurante r INNER JOIN cardapio c ON c.restaurante_id = r.id WHERE r.nome = '${nome}'`;

  conn.query(q, function (err, resp) {
    if (err) {
      res.status(400).json(err);
    }

    res.status(200).json(resp);
  });
};

const infoRestAval = (req, res) => {
  const { nome } = req.query;

  const q = `SELECT r.nome, r.rua, r.numero, r.bairro, r.cidade, r.uf, r.complemento, c.descricao, c.valor, a.nota, a.data_aval, a.descricao_aval FROM restaurante r INNER JOIN cardapio c ON c.restaurante_id = r.id INNER JOIN avaliacao a ON r.id = a.restaurante_id WHERE r.nome = '${nome}'`;

  conn.query(q, function (err, resp) {
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

  const q = `UPDATE restaurante SET nome = '${nome}', categoria_id = ${categoriaId}, rua = '${rua}', bairro = '${bairro}', numero = '${numero}', complemento = '${complemento}',cidade = '${cidade}', uf = '${uf}'  WHERE id = ${id}`;

  conn.query(q, function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const deleteRestaurante = (req, res) => {
  const { id } = req.params;

  const q = `DELETE FROM restaurante WHERE id = ${id}`;

  conn.query(q, function (err, resp) {
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
  readRestHomeWhere,
  infoRest,
  infoRestAval,
  updateRestaurante,
  deleteRestaurante,
};
