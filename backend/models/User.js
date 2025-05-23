const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  senha: String,
  perfil: { type: String, enum: ['usuario', 'admin'], default: 'usuario' },
  pontos: { type: Number, default: 0 }
});
module.exports = mongoose.model('User', UserSchema);
