import { Router } from 'express';
import { operationRoutes } from './operation.routes';
import { typeRoutes } from './type.routes';
import { authRoutes } from './auth.routes';

const router = Router();

router.use('/', [
    operationRoutes,
    typeRoutes,
    authRoutes
]);

export default router;