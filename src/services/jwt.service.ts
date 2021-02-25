import { UserI } from '../interfaces/user.interface';
import jwt from 'jwt-simple';
import { env } from '../config/configs';

export class JwtService {
    static createdToken(user: UserI) {
        const date = new Date();

        const payload = {
            sub: user.id,
            iat: date.getTime(),
            exp: date.setDate(date.getDate() + 14)
        }

        return jwt.encode(payload, env.SECRET);
    }
}

