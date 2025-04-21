import carRepository from '../repositories/carRepository.js';

class CarController {

    async index(req, res) {
        const row = await carRepository.findAll();
        res.json(row);
    }

    async show(req, res) {
        const id = req.params.id;
        const row = await carRepository.findById(id);
        res.json(row);
    }

    async store(req, res) {
        const car = req.body;
        const row = await carRepository.create(car);
        res.status(201).json(row);
     }

     async update(req, res) {
        const id = req.params.id;
        const car = req.body;
        const row = await carRepository.update(car, id);
        res.status(200).json(row);
        
    }

    async delete(req, res) {
        const id = req.params.id;
        const row = await carRepository.delete(id);
        res.json(row);
     }
}

export default new CarController();
 