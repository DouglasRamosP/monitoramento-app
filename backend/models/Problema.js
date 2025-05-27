const mongoose = require("mongoose");

const ProblemaSchema = new mongoose.Schema(
  {
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tipo: { type: String, enum: ["equipamento", "ambiente"], required: true },
    equipamento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Equipamento",
      default: null,
    },
    ambiente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ambiente",
      default: null,
    },
    descricao: { type: String, required: true },
    unidade: {
      type: String,
      enum: ["unidade1", "unidade2"],
      required: true,
    },
    imagemUrl: String,
    resolvido: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Problema", ProblemaSchema);
