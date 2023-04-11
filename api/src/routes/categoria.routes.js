const express = require("express");
const router = express.Router();

const categoriaController = require("../controllers/categoria.controller");

router.post("/add", categoriaController.addCategoria);

router.get("/read", categoriaController.readCategoria);

router.delete("/delete/:id", categoriaController.deleteCategoria);

module.exports = router;
