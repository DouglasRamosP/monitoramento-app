// Importa o mongoose, que é a biblioteca usada para conectar e interagir com o MongoDB
const mongoose = require('mongoose');

// Cria uma função assíncrona para conectar ao banco de dados
const connectDB = async () => {
  try {
    // Tenta conectar ao MongoDB usando a URI armazenada nas variáveis de ambiente (.env)
    await mongoose.connect(process.env.MONGO_URI);

    // Se a conexão for bem-sucedida, exibe essa mensagem no console
    console.log('MongoDB conectado');
  } catch (err) {
    // Se ocorrer algum erro na conexão, exibe a mensagem de erro
    console.error(err.message);

    // Encerra a aplicação com código 1 (erro)
    process.exit(1);
  }
};

// Exporta a função para que possa ser usada em outros arquivos, como server.js
module.exports = connectDB;
