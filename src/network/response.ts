import { Request, Response } from 'express';

const success = (req:Request, res:Response , data: Object, statusCode = 200) => {
    res.status(statusCode).json({
        error: false,
        data
    })
}

const error = (req:Request, res:Response , data: Object, statusCode = 500) => {
    res.status(statusCode).json({
        error: true,
        data
    })
}

export = { success, error }