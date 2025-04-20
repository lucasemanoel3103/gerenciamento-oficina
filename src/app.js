import express from 'express';
import conexao from '../infra/conexao.js';

const app = express();

app.use(express.json()); // Middleware para converter o body da requisição em JSON


function searchCarById(id) {
    return cars.filter((car) => car.id == id);
};

// Função para buscar o índice do carro pelo id
function searchIndexCar(id){
    return cars.findIndex((car) => car.id == id);
}


app.get('/cars', (req, res) => {
    //res.status(200).send(cars);
    const sql = 'SELECT * FROM cars';
    conexao.query(sql, (error, result) => {
        if(error) {
            res.status(404).json( {'error': error});
        } else {
            res.status(200).json(result);
        }
    })
});

app.get('/cars/:id', (req, res) => {
    //res.json(searchCarById(id));
    const id = req.params.id;
    const sql = 'SELECT * FROM cars WHERE id=?;'
    conexao.query(sql, id, (error, result) => {
        const row = result[0];
        if(error) {
            res.status(404).json( {'error': error});
        } else {
            res.status(200).json(row);
        }
    })
});

app.post('/cars', (req, res) => {
    //cars.push(req.body);
   // res.status(201).send('Carro deu entrtada na oficina!');  
   const cars = req.body;
   const sql = 'INSERT INTO cars SET ?;'
   conexao.query(sql, cars, (error, result) => {
       if(error) {
           res.status(400).json( {'error': error});
       } else {
           res.status(201).json(result);
       }
   })            
});

app.delete('/cars/:id', (req, res) => {
    const index = searchIndexCar(req.params.id);
    cars.splice(index, 1);
    res.status(200).send(`Carro com id ${req.params.id} retirado da oficina!`);
});

app.put('/cars/:id', (req, res) => {
    const index = searchIndexCar(req.params.id);
    cars[index].situacao = req.body.situacao;
    res.json(cars)
});

 export default app; // Exporta o app para ser usado no server.js