const express = require("express");
const router = express.Router();

const categoriaController = require("../controllers/categoria.controller");

router.post("/add", categoriaController.addCategoria);

router.get("/read", categoriaController.readCategoria);

router.put("/update/:id", categoriaController.updateCategoria);

router.delete("/delete/:id", categoriaController.deleteCategoria);

module.exports = router;
