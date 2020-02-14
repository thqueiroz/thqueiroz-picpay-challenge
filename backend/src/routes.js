import { Router } from 'express';

import UserController from './app/controllers/UserController';
import TransactionController from './app/controllers/TransactionController';
import CardController from './app/controllers/CardController';

const routes = new Router();

routes.get('/users', UserController.index);

routes.get('/transactions', TransactionController.index);
routes.post('/transactions', TransactionController.store);

routes.get('/card', CardController.index);

export default routes;