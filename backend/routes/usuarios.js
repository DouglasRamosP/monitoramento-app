const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { nome, email, senha, perfil } = req.body;

  try {
    const novoUsuario = new User({ nome, email, senha, perfil });
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao criar usuário' });
  }
});

module.exports = router;
console.log("Rota /usuarios carregada");
