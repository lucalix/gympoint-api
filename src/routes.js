import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentsController from './app/controllers/StudentsController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Unauthenticated routes

routes.post('/sessions', SessionController.store);

// Authenticated routes

routes.use(authMiddleware);

routes.post('/students', StudentsController.store);
routes.put('/students/:id', StudentsController.update);

export default routes;
