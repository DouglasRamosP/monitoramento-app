// Importa o Express, que é o framework para criar o servidor e rotas
const express = require("express");
// Importa o dotenv, que carrega variáveis de ambiente do arquivo .env
const dotenv = require("dotenv");
// Importa a função que conecta ao banco de dados MongoDB
const connectDB = require("./config/db");
// Importa as rotas relacionadas aos usuários
const usuariosRoutes = require("./routes/usuarios");
// Importa as rotas relacionadas aos ambientes
const ambienteRoutes = require("./routes/ambiente");
// Importa as rotas relacionadas a autenticação de login
const authRoutes = require("./routes/auth");
// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();
// Conecta ao banco de dados MongoDB
connectDB();
// Cria a aplicação Express
const app = express();
// Define a porta do servidor (usa a do .env ou 3000 como padrão)
const PORT = process.env.PORT || 3000;
// Middleware que permite o servidor entender JSON no corpo das requisições
app.use(express.json());
// Define que todas as rotas que começarem com /usuarios serão tratadas pelo arquivo de rotas de usuários
app.use("/usuarios", usuariosRoutes);
// Agora temos POST /login
app.use("/", authRoutes);
// Define que todas as rotas que começarem com /ambiente serão tratadas pelo arquivo de rotas de usuário
app.use("/ambientes", ambienteRoutes);
// Rota principal (GET /) que apenas retorna uma mensagem simples
app.get("/", (req, res) => {
  res.send("Servidor Express funcionando com MongoDB!");
});
// Inicia o servidor e escuta na porta definida, exibindo uma mensagem no console
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
