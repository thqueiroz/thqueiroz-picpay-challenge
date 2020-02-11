import { Router } from 'express';

import UserController from './app/controllers/UserController';
import TransactionController from './app/controllers/TransactionController';

const routes = new Router();

routes.get('/users', UserController.index);

routes.get('/transactions', TransactionController.index);

export default routes;

//
