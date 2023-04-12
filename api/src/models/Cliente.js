const conn = require("../database/connection");
const ClienteTelefone = require("./ClienteTelefone");

class Cliente {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.email = i.email;
    this.senha = i.senha;
    this.numero = i.numero;
  }

  add() {
    const query = `INSERT INTO cliente VALUE ('${this.id}', '${this.nome}', '${this.email}', '${this.senha}')`;

    return query;
  }

  addTelefone() {
    // let clienteTelefone = new ClienteTelefone(this.id, this.numero);
    const query = `INSERT INTO telefone VALUE ('${this.id}', '${this.numero}')`;

    conn.query(query, function (err, resp) {
      if (err) {
        console.log(err);
      }
    });
    return;
  }

  read() {
    return `SELECT id, nome, email FROM cliente`;
  }

  delete() {
    return `DELETE FROM cliente WHERE id = ${this.id}`;
  }
}
module.exports = Cliente;
