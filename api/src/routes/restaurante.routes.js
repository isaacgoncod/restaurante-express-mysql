const express = require("express");
const router = express.Router();

const restauranteController = require("../controllers/restaurante.controller");

router.post("/add", restauranteController.addRestaurante);

router.get("/read", restauranteController.readRestaurante);

router.put("/update/:id", restauranteController.updateRestaurante);

router.delete("/delete/:id", restauranteController.deleteRestaurante);

module.exports = router;
