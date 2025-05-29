const express = require("express");
const router = express.Router();
const Agendamento = require("../models/Agendamento");
// const verificarToken = require("../middleware/authMiddleware");

// @desc    Lista todos os ambientes
// @route   GET /agendamentos
router.get("/", async (req, res) => {
  try {
    const agendamentos = await Agendamento.find();
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
});

// @desc    Mostra um agendamento especificado por ID
// @route   GET /agendamentos/:id
router.get("/:id", async (req, res) => {
  try {
    const agendamentos = await Agendamento.findById(req.params.id);
    if (!agendamentos)
      return res.status(404).json({ error: "Agendamento não encontrado" })
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
});

module.exports = router;
