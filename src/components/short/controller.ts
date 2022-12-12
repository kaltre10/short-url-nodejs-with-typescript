import { Request, Response } from 'express';
import response from '../../network/response';
import store from './store';

const click = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const short = await store.click(id);
        response.success(req, res, <object>short, 200);
    } catch (error) {
        response.error(req, res, <object>error, 400);
    }
}

const getAll = async (req:Request, res:Response) => {
    try {
        const { user } = req.params;
        if(!user) throw 'User Invalid!';
        const urlShort = await store.getShorts(user);
        response.success(req, res, urlShort, 200);
    } catch (error) {
        response.error(req, res, <object>error, 400);
    }
}

const insertShort = async (req:Request, res:Response) => {
    try {
        const { user, url, urlShort } = req.body;
        const short = await store.insertShort(user, url, urlShort);
        response.success(req, res, short, 200);
    } catch (error) {
        response.error(req, res, <object>error, 400);
    }
}

const updateShort = async (req:Request, res:Response) => {
    try {
        const { user, url, urlShort } = req.body;
        const short = await store.updateShort(user, url, urlShort);
        response.success(req, res, <object>short, 200);
    } catch (error) {
        response.error(req, res, <object>error, 400);
    }
}

const deleteShort = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        if(!id) throw 'User Invalid!';
        const short = await store.deleteShort(id);
        response.success(req, res, <object>short, 200);
    } catch (error) {
        response.error(req, res, <object>error, 400);
    }
}

export default {
    getAll,
    insertShort,
    updateShort,
    deleteShort,
    click
}