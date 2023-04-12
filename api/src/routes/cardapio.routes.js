const express = require("express");
const router = express.Router();

const cardapioController = require("../controllers/cardapio.controller");

router.post("/add", cardapioController.addCardapio);

router.get("/read", cardapioController.readCardapio);

router.put("/update/:id", cardapioController.updateCardapio);

router.delete("/delete/:id", cardapioController.deleteCardapio);

module.exports = router;
