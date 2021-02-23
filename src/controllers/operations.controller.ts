import { Request, Response } from "express";
import { Operation } from '../models/operation.model'
import { Type } from "../models/type.model";
class OperationsController {
    public async index(req: Request, res: Response) {
        try {
            const { page } = req.query as any;
            const limit = 3; 
            
            const startIndex = (page - 1) * limit

            const getPagingData = (data:any, page:any, limit:any) => {
                const { count: totalItems, rows: operations } = data;
                const currentPage = page ? +page : 0;
                const totalPages = Math.ceil(totalItems / limit);
              
                return { totalItems, totalPages, currentPage, operations };
            };

            const opsPromise = Operation.findAndCountAll({
                include: [Type],
                order: [['date', 'DESC']],
                offset: startIndex,
                limit: limit
            }).then((res:any) => {
                return getPagingData(res, page, limit);
            });

            const totalPromise = Operation.sum('amount');

            const [ops, total] = await Promise.all([opsPromise, totalPromise]);

            res.status(200).json({ res: ops, total: total });
        } catch(e) {
            res.status(500).json({ res: "Internal error"});
        }
    }
    
    public async register(req: Request, res: Response) {
        const { concept, amount, date, type } = req.body.operation;

        //Format the date
        let formatDate = date.split('/');
        formatDate = formatDate[2] + '-' + formatDate[1] + '-' + formatDate[0];

        try{
            await Operation.create({
                concept,
                amount,
                date: formatDate,
                typeId: type
            });

            res.status(201).json({ res: "Operation create successfully"});
        } catch(e) {
            res.status(500).json({ err: "Error to create the operation" });
        }
    }

    public async update(req: Request, res: Response) {
        const { id, concept, amount, date, type } = req.body.operation;
        
        let formatDate = date.split('/').reverse().join('-')
        console.log(formatDate);
        
        try {
            await Operation.update({
                concept,
                amount,
                date: formatDate,
                typeId: type
            },{
                where: {id}
            });

            res.status(201).json({res: "The operation was update"});
        } catch(e) {
            res.status(500).json({res: "The update failed"});
        }
        
    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;
        
        try {
            await Operation.destroy({
                where: {id}
            });

            res.status(200).json({res: "The operation was delete"})
        } catch(e) {
            res.status(500).json({ res: "The delete failed" });
        }
    }

}

export default new OperationsController;
