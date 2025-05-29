const express = require("express");
const router = express.Router();
const Ambiente = require("../models/Ambiente");
const verificarToken = require("../middleware/authMiddleware");

// Esta rota agora exige token
router.get("/", verificarToken, (req, res) => {
  res.json({ mensagem: "Acesso autorizado!" });
});
// @desc    Lista todos os ambientes
// @route   GET /ambientes
router.get("/", async (req, res) => {
  try {
    const ambientes = await Ambiente.find();
    res.json(ambientes);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar ambientes" });
  }
});

// @desc    Cria um novo ambiente
// @route   POST /ambientes
router.post("/", async (req, res) => {
  try {
    const novoAmbiente = new Ambiente(req.body);
    await novoAmbiente.save();
    res.status(201).json(novoAmbiente);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar ambiente" });
  }
});

// @desc    Detalha um ambiente específico por ID
// @route   GET /ambientes/:id
router.get("/:id", async (req, res) => {
  try {
    const ambiente = await Ambiente.findById(req.params.id);
    if (!ambiente)
      return res.status(404).json({ error: "Ambiente não encontrado" });
    res.json(ambiente);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar ambiente" });
  }
});

// @desc    Atualiza um ambiente existente
// @route   PUT /ambientes/:id
router.put("/:id", async (req, res) => {
  try {
    const atualizado = await Ambiente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ error: "Erro ao atualizar ambiente" });
  }
});

// @desc    Remove um ambiente
// @route   DELETE /ambientes/:id
router.delete("/:id", async (req, res) => {
  try {
    await Ambiente.findByIdAndDelete(req.params.id);
    res.json({ mensagem: "Ambiente deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar ambiente" });
  }
});

module.exports = router;
