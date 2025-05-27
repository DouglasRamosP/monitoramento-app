const mongoose = require("mongoose")

const AgendamentoSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      tipo: { type: String, enum: ['equipamento', 'ambiente'], required: true },
      equipamento: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipamento', default: null },
      ambiente: { type: mongoose.Schema.Types.ObjectId, ref: 'Ambiente', default: null },
      data: { type: Date, required: true },
      observacoes: String,
      unidade: {
        type: String,
        enum: ["unidade1", "unidade2"],
        required: true
    },
      status: { type: String, enum: ['pendente', 'concluido', 'cancelado'], default: 'pendente' }
    }, { timestamps: true });
    
    module.exports = mongoose.model("Agendamento", AgendamentoSchema);
