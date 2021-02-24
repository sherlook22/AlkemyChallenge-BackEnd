import { Request, Response } from "express";
import { User } from "../models/user.model";

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
}

export default new AuthController;