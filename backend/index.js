const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const usuariosRoutes = require("./routes/usuarios");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/usuarios', usuariosRoutes);

app.get("/", (req, res) => {
  res.send("Servidor Express funcionando com MongoDB!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
