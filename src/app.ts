import express, { Router, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './router';
import db from './libs/dbConfig';
import controller from './components/url/controller';

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
db();
app.get('/', (req:Request, res:Response) => res.send('Hola Mundo!!!'));
app.get('/:url', async (req:Request, res:Response) => {
    const url = await controller.find(req.params.url);
    const path = `https://${url?.url}` || 'https://google.com';
    res.redirect(path);
});
app.use('/', router);

export default app;