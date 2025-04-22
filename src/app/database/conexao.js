import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})   

conexao.connect();

export const consult = (sql, values='', messageReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, values, (error, result) => {
            if(error) return reject (messageReject);
            const row = JSON.parse(JSON.stringify(result));
            return resolve(row);
        })
    })
}

export default conexao