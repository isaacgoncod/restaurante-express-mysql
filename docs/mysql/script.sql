DROP DATABASE IF EXISTS restaurante;

CREATE DATABASE restaurante CHARSET = UTF8 COLLATE utf8_general_ci;

USE restaurante;

CREATE TABLE
  cliente (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
  );

CREATE TABLE
  telefone (
    cliente_id VARCHAR(255) NOT NULL,
    numero VARCHAR(255) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES cliente (id)
  );

CREATE TABLE
  categoria (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL
  );

CREATE TABLE
  restaurante (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    categoria_id INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    numero VARCHAR(255) NOT NULL,
    complemento VARCHAR(255),
    cidade VARCHAR(255) NOT NULL,
    UF CHAR(2) NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categoria (id) ON UPDATE CASCADE
  );

CREATE TABLE
  cardapio (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    restaurante_id INT NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    valor FLOAT (10, 2) NOT NULL,
    FOREIGN KEY (restaurante_id) REFERENCES restaurante (id) ON UPDATE CASCADE
  );

CREATE TABLE
  avaliacao (
    restaurante_id INT NOT NULL,
    cliente_id VARCHAR(255) NOT NULL,
    data_aval DATE NOT NULL,
    nota FLOAT (10, 2) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES cliente (id) ON UPDATE CASCADE,
    FOREIGN KEY (restaurante_id) REFERENCES restaurante (id) ON UPDATE CASCADE
  );