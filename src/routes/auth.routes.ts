import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRoutes = Router();
const path = '/type'

authRoutes.route(`${path}/index`)
    .get(AuthController.index);
    
export { authRoutes };