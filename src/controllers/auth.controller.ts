import { Request, Response } from "express";
import { User } from "../models/user.model";
import { JwtService } from '../services/jwt.service';

class AuthController {
    public async register(req: Request, res: Response) {
        const { email, password } = req.body;

        try{
            await User.create({
                email,
                password
            });

            res.status(201).json({ res: "User created successfully" });
        }catch(e) {
            res.status(500).json({ res: e });
        }
    }

    public async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = await User.findOne({where: {email}});

        if(user === null) {
            return res.status(401).json({ res: 'The data is not valid' });
        }

        if(!user.validatePassword(password)) {
            return res.status(401).json({ res: 'The data is not valid' });
        }
        
        //Created the token
        return res.status(201).json({ res: JwtService.createdToken(user) });
    }
}

export default new AuthController;