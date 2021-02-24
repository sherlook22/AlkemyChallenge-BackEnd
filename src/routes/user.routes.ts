import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRoutes = Router();
const path = '/type'

userRoutes.route(`${path}/index`)
    .get(UserController.index);
    
export { userRoutes };