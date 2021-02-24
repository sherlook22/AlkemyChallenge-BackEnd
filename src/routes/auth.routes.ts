import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRoutes = Router();
const path = '/auth'

authRoutes.route(`${path}/register`)
    .post(AuthController.register);
    
export { authRoutes };