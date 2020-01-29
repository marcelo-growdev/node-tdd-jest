import { Router } from 'express';
import ExampleController from './app/controllers/ExampleController';

const routes = Router();

routes.get('/', (req, res) => res.json('START-API-NODE'));

routes.get('/example/', ExampleController.index);

export default routes;
