import { Router } from 'express';
import controller from '../components/users/controller';

const route = Router();

route.post('/login', controller.login);
route.post('/register', controller.register);

export default route;