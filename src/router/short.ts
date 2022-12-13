import { Router } from 'express';
import controller from '../components/short/controller';

const route = Router();

route.get('/:user', controller.getAll);
route.post('/', controller.insertShort);
route.delete('/:id', controller.deleteShort);

export default route;