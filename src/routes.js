import {Router} from 'express';
import CarController from './app/controllers/carController.js';

const router = Router();

router.get('/cars', CarController.index);
router.get('/cars/:id', CarController.show);
router.post('/cars', CarController.store);
router.put('/cars/:id', CarController.update);
router.delete('/cars/:id', CarController.delete);

export default router;