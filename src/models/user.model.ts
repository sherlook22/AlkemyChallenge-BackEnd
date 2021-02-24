import { BeforeCreate, Table } from 'sequelize-typescript';
import { UserDefinition } from './definitions/userDefinition'
import bcrypt from 'bcrypt';

@Table
export class User extends UserDefinition {
  
    @BeforeCreate
    static hashPassword(user: User) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    }

}