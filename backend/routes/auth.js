const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// POST /login - Autenticar um usuário
router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "Email e senha são obrigatórios" });
  }

  try {
    const usuario = await User.findOne({ email });

    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ erro: "Credenciais inválidas" });
    }

    // Gerar token JWT
    const token = jwt.sign(
      { id: usuario._id, perfil: usuario.perfil }, // payload
      process.env.JWT_SECRET, // chave secreta
      { expiresIn: "1h" } // tempo de expiração
    );

    res.json({
      token,
      usuario: { nome: usuario.nome, perfil: usuario.perfil },
    });
  } catch (err) {
    console.error("Erro no login:", err);
    res.status(500).json({ erro: "Erro ao realizar login" });
  }
});

module.exports = router;