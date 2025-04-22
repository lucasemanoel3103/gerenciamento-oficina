import {consult} from '../database/conexao.js';

class CarRepository {
    findAll(){
        const sql = 'SELECT * FROM cars;'
        return consult(sql, 'Não foi possivel encontrar nenhum carro!')
    }

    findById(id){
        const sql = 'SELECT * FROM cars WHERE id=?;'
        return consult(sql, id, 'Não foi possivel encontrar esse carro!')
    }

    create(car) {
        const sql = 'INSERT INTO cars SET ?;'
        return consult(sql, car, 'Não foi possivel cadastrar o carro!')
    }

    update(car, id ) {
        const sql = 'UPDATE cars SET ? WHERE id=?;'
        return consult(sql, [car, id], 'Não foi possivel atualizar a situação desse carro!')
    }

    delete(id){
        const sql = 'DELETE FROM cars WHERE id=?;'
        return consult(sql, id, 'Não foi possivel deletar o carro do sistema!')
    }
}
    
export default new CarRepository();