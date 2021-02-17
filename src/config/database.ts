import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import dotenv from 'dotenv';


dotenv.config();
const sequelize: Sequelize = new Sequelize(
    {   
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: Number(process.env.DB_PORT),
        models: [path.join(path.dirname(__dirname), 'models', '**', '*.model.ts')],
        modelMatch: (filename, member) => {
            return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
        }
    }
);

export async function startConnection() {
    await sequelize.sync( {alter:true} ); //{ force:true }
    console.log("You are connected to database");
}