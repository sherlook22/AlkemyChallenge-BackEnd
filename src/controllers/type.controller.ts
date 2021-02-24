import { Request, Response } from "express";
import { Type } from "../models/type.model";

class TypeController {
    public async index(req: Request, res: Response) {
        try {
            const type = await Type.findAll({});

            res.status(200).json({ res: type });
        } catch (e) {
            res.status(500).json({ res: e });
        }
    }
}

export default new TypeController;
