import app from './src/app.js'; // Importa o app do arquivo app.js
import conexao from './infra/conexao.js'

const PORT = 3000

conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar ao banco de dados: ', erro);
    } else {
        console.log('Conectado ao banco de dados!');
    }

    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}); 

// O código acima importa o app do arquivo app.js e a conexão com o banco de dados do arquivo conexao.js.
// Em seguida, define a porta do servidor como 3000 e tenta conectar ao banco de dados.