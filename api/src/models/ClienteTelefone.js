class ClienteTelefone {
  constructor(i) {
    this.clienteId = i.clienteId;
    this.numero = i.numero;
  }

  add() {
    return `INSERT INTO telefone VALUE ('${this.clienteId}', '${this.numero}')`;
  }
  read() {
    return `SELECT * FROM telefone`;
  }

  delete() {
    return `DELETE FROM telefone WHERE cliente_id = ${this.clienteId}`;
  }
}
module.exports = ClienteTelefone;
