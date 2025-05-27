const mongoose = require("mongoose");

const EquipamentoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    descricao: String,
    ptrimonio: String,
    numeroSerie: String,
    qrCodeId: { type: String, unique: true },
    status: {
      type: String,
      enum: ["ativo", "inativo", "manutencao"],
      default: "ativo",
    },
     unidade: {
        type: String,
        enum: ["unidade1", "unidade2"],
        required: true
    },
    ambiente: { type: mongoose.Schema.Types.ObjectId, ref: "Ambiente" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Equipamento", EquipamentoSchema);
