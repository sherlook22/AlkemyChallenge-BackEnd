import { Router } from 'express';
import OperationsController from '../controllers/operations.controller';

const operationRoutes = Router();

operationRoutes.route('/register/operation')
    .post(OperationsController.index);
    
export { operationRoutes };
