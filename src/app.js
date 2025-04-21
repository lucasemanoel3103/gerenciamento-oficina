import express from 'express';
import CarController from './app/controllers/carController.js';

const app = express();

app.use(express.json()); 

app.get('/cars', CarController.index);
app.get('/cars/:id', CarController.show);
app.post('/cars', CarController.store);
app.put('/cars/:id', CarController.update);
app.delete('/cars/:id', CarController.delete);

 export default app; 