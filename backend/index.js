const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // Permite receber JSON no corpo da requisição

app.get("/", (req, res) => {
  res.send("Servidor Express funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
