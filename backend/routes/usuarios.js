const mongoose = require("mongoose");
// Importa o Express, que é o framework usado para criar rotas e servidores HTTP
const express = require("express");

// Cria um "roteador" do Express para definir rotas separadas do app principal
const router = express.Router();

// Importa o modelo de usuário que foi definido com Mongoose
const User = require("../models/User");
// Importa a autenticação por token
const verificarToken = require("../middleware/authMiddleware");

// Define uma rota POST para criar um novo usuário
// Essa rota será acessada, por exemplo, com POST /usuarios (dependendo do index.js)
router.post("/", verificarToken, async (req, res) => {
  // Extrai os dados enviados no corpo da requisição (nome, email, senha, perfil)
  const { nome, email, senha, unidade, perfil } = req.body;

  // Validação simples (pode ser melhorada com Joi ou express-validator)
  if (!nome || !email || !senha || !unidade) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    // Cria um novo usuário com os dados recebidos
    const novoUsuario = new User({ nome, email, senha, unidade, perfil });

    // Salva o novo usuário no banco de dados
    await novoUsuario.save();

    // Retorna o usuário criado com status 201 (Criado)
    res.status(201).json(novoUsuario);
  } catch (err) {
    // Se ocorrer algum erro, exibe no console e retorna erro 500 (Interno do servidor)
    console.error(err);
    res.status(500).json({ erro: "Erro ao criar usuário" });
  }
});

// GET /usuarios/:id - buscar um usuário por ID
router.get("/:id", verificarToken, async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar usuário" });
  }
});

// GET /usuarios - Listar todos os usuários
router.get("/", verificarToken, async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar usuários" });
  }
});

// PUT /usuarios/:id - Atualizar um usuário por ID
router.put("/:id", verificarToken, async (req, res) => {
  try {
    const usuarioAtualizado = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!usuarioAtualizado) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar usuário" });
  }
});

// DELETE /usuarios/:id - Deletar um usuário por ID
router.delete("/:id", verificarToken, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: "error", erro: "ID inválido" });
  }

  try {
    const usuarioRemovido = await User.findByIdAndDelete(id);

    if (!usuarioRemovido) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.json({ mensagem: "Usuário deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao deletar usuário" });
  }
});


// Exporta o roteador para ser usado no arquivo principal da aplicação (ex: index.js)
module.exports = router;

// Apenas uma mensagem no console para indicar que a rota foi carregada com sucesso
console.log("Rota /usuarios carregada");
