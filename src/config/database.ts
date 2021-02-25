import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import { env } from './configs';

const sequelize: Sequelize = new Sequelize(
    {   
        database: env.DB.NAME,
        username: env.DB.USER,
        password: env.DB.PASS,
        host: env.DB.HOST,
        dialect: 'mysql',
        port: Number(env.DB.PORT),
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