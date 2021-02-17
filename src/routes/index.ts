import { Router } from 'express';
import { operationRoutes } from './operation.routes'

const router = Router();

router.use('/', [
    operationRoutes
]);

export default router;