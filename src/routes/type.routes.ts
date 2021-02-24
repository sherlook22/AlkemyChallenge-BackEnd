import { Router } from 'express';
import TypeController from '../controllers/type.controller';

const typeRoutes = Router();
const path = '/type'

typeRoutes.route(`${path}/index`)
    .get(TypeController.index);
    
export { typeRoutes };
