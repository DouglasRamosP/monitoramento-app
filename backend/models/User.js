// Importa o mongoose, que é usado para definir o modelo (schema) e interagir com o MongoDB
const mongoose = require("mongoose");

// Define o esquema (estrutura) de um usuário no banco de dados
const UserSchema = new mongoose.Schema({
  // Nome do usuário (tipo texto)
  nome: { type: String, required: true },

  // E-mail do usuário, que deve ser único no banco
  email: { type: String, required: true, unique: true },

  // Senha do usuário (tipo texto)
  senha: { type: String, required: true },

  unidade: {
    type: String,
    enum: ['unidade1', 'unidade2'], 
    required: true
  },

  // Perfil do usuário, que pode ser 'usuario' ou 'admin'. Por padrão, será 'usuario'
  perfil: { type: String, enum: ["usuario", "admin"], default: "usuario" },

  // Pontuação do usuário, começa em 0 por padrão
  pontos: { type: Number, default: 0 },
}, { timestamps: true });

// Exporta o modelo 'User' baseado no esquema definido acima
// Isso permite usar o modelo em outras partes da aplicação para criar, buscar, atualizar ou deletar usuários
module.exports = mongoose.model("User", UserSchema);
