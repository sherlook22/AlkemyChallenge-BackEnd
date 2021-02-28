import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import { env } from './configs';
import { Type } from '../models/type.model';

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
    /* ############################################# */
    //Create the base types
    async function crateBaseTypes() {
        await Type.findOrCreate( {where: { name: 'Ingreso' }} );
        await Type.findOrCreate( {where: { name: 'Egreso' }} );
    }
    /* ############################################# */
    await sequelize.sync( {alter:true} ); //{ force:true }
    await crateBaseTypes();
    console.log("You are connected to database");
}