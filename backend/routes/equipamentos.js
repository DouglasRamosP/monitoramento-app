const express = require("express");
const router = express.Router();
const Equipamento = require(".../models/Equipamento");
const verificarToken = require("../middleware/authMiddleware");

// @desc    Cria um novo Equipamento
// @route   POST /equipamentos
router.post("/", verificarToken, async (req, res) => {
  try {
    const novoEquipamento = new Equipamento(req.body);
    await novoEquipamento.save();
    res.status(201).json(novoEquipamento);
  } catch (err) {
    res.status(400).json({ erro: "" });
  }
});
