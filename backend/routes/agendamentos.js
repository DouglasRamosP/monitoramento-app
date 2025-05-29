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

module.exports = router;
