import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './router';
import db from './libs/dbConfig';

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
db();
app.get('/', (req:Request, res:Response) => res.send('Hola Mundo!!!'));
app.use('/', router);

export default app;