import app from "./app.js"; // Importa o app do arquivo app.js
import { connection } from "../src/app/database/conexao.js";
import Owner from "../src/app/models/owner";

const PORT = process.env.PORT || 3000;

connection.sync({ alter: true }).then(() => {
  console.log("Banco de dados sincronizado");
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}).catch((err) => {
    console.log("Erro ao sincronizar o banco:", err)
});
