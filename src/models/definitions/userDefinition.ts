import { Model, Column, Table, DataType, AllowNull, Unique } from "sequelize-typescript";
import { UserI } from '../../interfaces/user.interface';

@Table({
    timestamps: false
})
export abstract class UserDefinition extends Model<UserI> {
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(100))
  email!: string;
  
  @AllowNull(false)
  @Column(DataType.STRING(100))
  password!: string;

}
