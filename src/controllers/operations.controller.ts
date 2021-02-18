import { Request, Response } from "express";
import { Operation } from '../models/operation.model'
class OperationsController {
    public async register(req: Request, res: Response) {
        const { concept, amount, date, typeId } = req.body;
        try{
            await Operation.create({
                concept,
                amount,
                date,
                typeId
            });

            res.status(200).json({ res: "Operation create successfully"});
        } catch(e) {
            res.status(500).json({ err: "Error to create the operation" });
        }
    }

}

export default new OperationsController;
