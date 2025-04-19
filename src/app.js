import express from 'express';

const app = express();

app.use(express.json()); // Middleware para converter o body da requisição em JSON

//mock de dados
const cars = [
   {id: 1, modelo: 'Tiguan', motor: '2.0', ano: 2010, cliente: 'Pedro', situacao: 'Aguardando orçamento', contato: 11996678902},
    {id: 2, modelo: 'Civic', motor: '1.5', ano: 2018, cliente: 'Maria', situacao: 'Em serviço', contato: 11998278901},
    {id: 3, modelo: 'Corolla', motor: '2.0', ano: 2020, cliente: 'João', situacao: 'Aguardando aprovação do cliente', contato: 11999878501},    
    {id: 4, modelo: 'Onix', motor: '1.0', ano: 2021, cliente: 'Ana', situacao: 'Pronto', contato: 11999789567},
    {id: 5, modelo: 'Fusca', motor: '1.3', ano: 1970, cliente: 'Carlos', situacao: 'Aguardando pagamento', contato: 11999678901},
];

function searchCarById(id) {
    return cars.filter((car) => car.id == id);
};

// Função para buscar o índice do carro pelo id
function searchIndexCar(id){
    return cars.findIndex((car) => car.id == id);
}

//Rota Padrão
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/cars', (req, res) => {
    res.status(200).send(cars);
});

app.get('/cars/:id', (req, res) => {
    const id = req.params.id;
    res.json(searchCarById(id));
});

app.post('/cars', (req, res) => {
    cars.push(req.body);
    res.status(201).send('Carro deu entrtada na oficina!');              
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