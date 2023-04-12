const express = require("express");
const router = express.Router();

const clienteController = require("../controllers/cliente.controller");

router.post("/add", clienteController.addCliente);

router.get("/read", clienteController.readCliente);

router.put("/update/:id", clienteController.updateCliente);

router.delete("/delete/:id", clienteController.deleteCliente);

module.exports = router;
