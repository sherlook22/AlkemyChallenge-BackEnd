import dotenv from 'dotenv';

dotenv.config();

export const env: any = {
    DB: {
        NAME: process.env.DB_NAME, 
        USER: process.env.DB_USER,
        PASS: process.env.DB_PASS,
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT
    },
    SECRET: process.env.SECRET
}