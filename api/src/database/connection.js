const mysql = require("mysql2");

const con = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "restaurante",
});

module.exports = con;
