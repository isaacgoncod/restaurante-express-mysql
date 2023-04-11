class Cliente {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.email = i.email;
    this.senha = i.senha;
    this.numero = i.numero;
  }

  add() {
    return `INSERT INTO cliente VALUE (${this.id}, '${this.nome}', '${this.email}', '${this.senha}'),
            INSERT INTO telefone VALUE (${this.id}, '${this.numero}')
    `;
  }
  read() {
    return `SELECT * FROM cliente`;
  }

  auth() {
    return `SELECT * FROM cliente WHERE email = '${this.email}' AND senha = '${this.senha}'`;
  }

  delete() {
    return `DELETE FROM cliente WHERE id = ${this.id}`;
  }
}
module.exports = Cliente;
