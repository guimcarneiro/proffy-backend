import express from 'express';
import ClassesController from './controllers/classes-controller';
import ConnectionsController from './controllers/connections-controller';

//Esse arquivo utiliza o módulo de rotas do express para isolar somente as rotas da aplicação
//e exportá-las.

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;