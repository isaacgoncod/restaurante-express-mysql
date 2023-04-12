class Cliente {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.email = i.email;
    this.senha = i.senha;
    this.telefone1 = i.telefone1;
    this.telefone2 = i.telefone2;
  }

  add() {
    return `INSERT INTO cliente VALUE (DEFAULT, '${this.nome}', '${this.email}', '${this.senha}', '${this.telefone1}', '${this.telefone2}')`;
  }

  read() {
    return `SELECT id, nome, email, telefone_1, telefone_2 FROM cliente`;
  }

  delete() {
    return `DELETE FROM cliente WHERE id = ${this.id}`;
  }
}
module.exports = Cliente;
