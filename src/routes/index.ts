import { Router } from 'express';
import { operationRoutes } from './operation.routes';
import { typeRoutes } from './type.routes';
import { authRoutes } from './auth.routes';
import { isAuth } from '../middlewares/auth.middleware';

const router = Router();


router.use('/', 
    authRoutes,
    isAuth, [
        operationRoutes,
        typeRoutes
]);

// router.use('auth', [
//     authRoutes
// ]);

export default router;