// Importa o mongoose, que é usado para definir o modelo (schema) e interagir com o MongoDB
const mongoose = require("mongoose");
// Define o esquema (estrutura) de um usuário no banco de dados
const AmbienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },// Campo required garante que o campo seja obrigatório.
  descricao: String,
  localização: String,
  mapaCoords: { 
    x: Number,
    y: Number
}
// Add automaticamente dois campos em todo os documentos criados com aquele modelo (data e hora, de criação e modificação).
}, { timestamps: true }); 

module.exports = mongoose.model("Ambiente", AmbienteSchema);