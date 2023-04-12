class Restaurante {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.categoriaId = i.categoriaId;
    this.rua = i.rua;
    this.bairro = i.bairro;
    this.numero = i.numero;
    this.complemento = i.complemento;
    this.cidade = i.cidade;
    this.uf = i.uf;
  }

  add() {
    return `INSERT INTO restaurante VALUE (DEFAULT, '${this.nome}', ${this.categoriaId}, '${this.rua}', '${this.bairro}', '${this.numero}', '${this.complemento}', '${this.cidade}', '${this.uf}')`;
  }

  read() {
    return `SELECT * FROM restaurante`;
  }

  delete() {
    return `DELETE FROM restaurante WHERE id = ${this.id}`;
  }
}
module.exports = Restaurante;
