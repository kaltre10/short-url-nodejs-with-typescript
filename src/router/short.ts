import { Router } from 'express';
import controller from '../components/short/controller';

const route = Router();

route.get('/:user', controller.getAll);
route.get('/click/:id', controller.click);
route.post('/', controller.insertShort);
route.put('/', controller.updateShort);
route.delete('/:id', controller.deleteShort);

export default route;