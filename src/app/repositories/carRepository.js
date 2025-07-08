import Car from '../models/Car'

class CarRepository {
    findAll(){
        return Car.findAll()
    }

    findById(id){
        return Car.findByPk(id)
    }

    create(car) {
        return Car.create(car)
    }

    update(car, id ) {
        return Car.update(car, {
            where: {id}
        });
    }

    delete(id){
        return Car.destroy({
            where: {id}
        });
    }
}
    
export default new CarRepository();