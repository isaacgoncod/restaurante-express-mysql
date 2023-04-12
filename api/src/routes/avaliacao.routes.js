const express = require("express");
const router = express.Router();

const avaliacaoController = require("../controllers/avaliacao.controller");

router.post("/add", avaliacaoController.addAvaliacao);

router.get("/read", avaliacaoController.readAvaliacao);

router.put("/update/:id", avaliacaoController.updateAvaliacao);

router.delete("/delete/:id", avaliacaoController.deleteAvaliacao);

module.exports = router;
