const conn = require("../database/connection");

const addCategoria = (req, res) => {
  const { nome } = req.body;

  const q = `INSERT INTO categoria VALUE (DEFAULT, '${nome}')`;

  conn.query(q, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readCategoria = (req, res) => {
  const q = `SELECT * FROM categoria`;

  conn.query(q, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const updateCategoria = (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  const query = `UPDATE categoria SET nome = '${nome}' WHERE id = ${id}`;

  conn.query(query, function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const deleteCategoria = (req, res) => {
  const { id } = req.params;

  const q = `DELETE FROM categoria WHERE id = ${id}`;

  conn.query(q, function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

module.exports = {
  addCategoria,
  readCategoria,
  updateCategoria,
  deleteCategoria,
};
