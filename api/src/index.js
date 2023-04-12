const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth.route");
const clienteRoutes = require("./routes/cliente.routes");
const categoriaRoutes = require("./routes/categoria.routes");
const restauranteRoutes = require("./routes/restaurante.routes");
const cardapioRoutes = require("./routes/cardapio.routes");
const avaliacaoRoutes = require("./routes/avaliacao.routes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRoute);
app.use("/cliente", clienteRoutes);
app.use("/cat", categoriaRoutes);
app.use("/rest", restauranteRoutes);
app.use("/card", cardapioRoutes);
app.use("/ava", avaliacaoRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
