import { Router } from 'express';
import { operationRoutes } from './operation.routes';
import { typeRoutes } from './type.routes';

const router = Router();

router.use('/', [
    operationRoutes,
    typeRoutes
]);

export default router;