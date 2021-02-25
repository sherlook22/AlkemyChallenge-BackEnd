import jwt from 'jwt-simple';
import { env } from '../config/configs';
import { NextFunction, Response } from "express";

const isAuth = (req: any, res: Response, next: NextFunction) => {
    if(!req.headers.authorization) {
        return res.status(403).json({ res: 'Unauthorized' });
    }

    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.decode(token, env.SECRET);

    if(payload.exp <= Date.now()) {
        return res.status(401).json({ res: 'The has token expired' });
    }

    req.user = payload.sub;

    next();
}

export { isAuth };