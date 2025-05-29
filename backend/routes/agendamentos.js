const express = require("express");
const router = express.Router();
const Agendamento = require("../models/Agendamento");
const verificarToken = require("../middleware/authMiddleware");

// @desc    Lista todos os ambientes
// @route   GET /agendamentos
router.get("/", verificarToken, async (req, res) => {
  try {
    const agendamentos = await Agendamento.find();
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
});

// @desc    Mostra um agendamento especificado por ID
// @route   GET /agendamentos/:id
router.get("/:id", verificarToken, async (req, res) => {
  try {
    const agendamentos = await Agendamento.findById(req.params.id);
    if (!agendamentos)
      return res.status(404).json({ error: "Agendamento não encontrado" });
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
});

// @desc    Cria um novo Agendamento
// @route   POST /agendamentos
router.post("/", verificarToken, async (req, res) => {
  try {
    const agendamentos = Agendamento(req.body);
    await agendamentos.save();
    res.status(201).json(agendamentos);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar agendamento" });
  }
});

// @desc    Atualiza um agendamento existente
// @route   PUT /agendamento/:id
router.put("/:id", verificarToken, async (req, res) => {
  try {
    const atualizado = await Agendamento.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ error: "Erro ao atualizar o agendamento" });
  }
});

// @desc    Remove um agendamento
// @route   DELETE /agendamento/:id
router.delete("/:id", verificarToken, async (req, res) => {
  try {
    await Agendamento.findByIdAndDelete(req.params.id);
    res.json({ mensagem: "Ambiente deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar ambiente" });
  }
});

module.exports = router;
