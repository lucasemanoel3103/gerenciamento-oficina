import carRepository from "../repositories/carRepository.js";

class CarController {
  async index(req, res) {
    try {
      const row = await carRepository.findAll();

      if (row.length === 0) {
        return res
          .status(404)
          .json({ error: "Não há carros cadastrados no sistema!" });
      }

      res.json(row);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro ao buscar carros", detalhes: error.message });
    }
  }

  async show(req, res) {
    const id = req.params.id;
    const car = await carRepository.findById(id);
    if (!car) {
      return res.status(404).json({ error: "Carro não encontrado!" });
    }
    res.json(car);
  }

  async store(req, res) {
    try {
      const car = req.body;

      //Validação dos campos obrigatórios
      if (!car.model || !car.plate || !car.ownerId) {
        return res.status(400).json({ error: "Campos obrigatórios ausentes." });
      }

      //Verifica se o dono existe
      const owner = await ownerRepository.findById(car.ownerId);
      if (!owner) {
        return res.status(404).json({ error: "Dono não encontrado." });
      }

      //Cria o carro
      const row = await carRepository.create(car);

      //Retorna o carro criado
      return res.status(201).json(row);
    } catch (error) {
      //Trata erros inesperados
      console.error(error);
      return res.status(500).json({ error: "Erro interno no servidor." });
    }
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
