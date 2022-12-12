import { Request, Response } from 'express';
import response from '../../network/response';
import store from './store';

const register = async (req:Request, res:Response) => {
    const { email, password } = req.body;
    try {
        const user = await store.register(email, password);
        response.success(req, res, user, 200);
    } catch (error) {
        response.error(req, res, <object>error, 400);
    }
}

const login = async (req:Request, res:Response) => {
    const { email } = req.body;
    try {
        const user = await store.getUser(email);
        response.success(req, res, <object>user, 200);
    } catch (error) {
        response.error(req, res, <object>error, 400);
    }
}

export = {
    register,
    login
}