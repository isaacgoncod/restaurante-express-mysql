class Avaliacao {
  constructor(i) {
    this.id = i.id;
    this.restauranteId = i.restauranteId;
    this.clienteId = i.clienteId;
    this.dataAval = i.dataAval;
    this.nota = i.nota;
    this.descricao = i.descricao;
  }

  add() {
    return `INSERT INTO avaliacao VALUE (DEFAULT, ${this.restauranteId}, ${this.clienteId}, '${this.dataAval}', ${this.nota}, '${this.descricao}')`;
  }

  read() {
    return `SELECT * FROM avaliacao`;
  }

  delete() {
    return `DELETE FROM avaliacao WHERE id = ${this.id}`;
  }
}
module.exports = Avaliacao;
