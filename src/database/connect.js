const mongoose = require("mongoose");

const connectToDatabase = async () => {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSOWORD}@cursonodejs.x6gfe.mongodb.net/database?retryWrites=true&w=majority`,
    (erro) => {
      if (erro)
        () => {
          return console.log("Ocorreu um erro ao se conectar: ", erro);
        };

      return console.log("Conexão com o banco de dados foi um sucesso...");
    }
  );
};

module.exports = connectToDatabase