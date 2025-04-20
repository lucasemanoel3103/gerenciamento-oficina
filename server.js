import app from './src/app.js'; // Importa o app do arquivo app.js

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});