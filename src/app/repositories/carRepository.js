import conexao from '../database/conexao.js';

class CarRepository {
    findAll(){
        const sql = 'SELECT * FROM cars;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if(error) return reject ('Não foi possivel encontrar os carros')

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    findById(id){
        const sql = 'SELECT * FROM cars WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) return reject ('Não foi possivel encontrar o carro')

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    create(car) {
        const sql = 'INSERT INTO cars SET ?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, car, (error, result) => {
                if(error) return reject ('Não foi possivel cadastrar o carro')

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    update(car, id ) {
        const sql = 'UPDATE cars SET ? WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, [car, id], (error, result) => {
                if(error) return reject ('Não foi possivel atualizar a situação do carro')

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    delete(id){
        const sql = 'DELETE FROM cars WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) return reject ('Não foi possivel deletar o carro')

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }
}
    
export default new CarRepository();