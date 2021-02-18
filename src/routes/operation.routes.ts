import { Router } from 'express';
import OperationsController from '../controllers/operations.controller';

const operationRoutes = Router();
const path = '/operation'

operationRoutes.route(`${path}/index`)
    .get(OperationsController.index);

operationRoutes.route(`${path}/register`)
    .post(OperationsController.register);

operationRoutes.route(`${path}/update`)
    .put(OperationsController.update);

operationRoutes.route(`${path}/delete`)
    .delete(OperationsController.delete);
    
export { operationRoutes };
