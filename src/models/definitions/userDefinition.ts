import { Model, Column, Table, DataType, AllowNull, PrimaryKey, HasMany } from "sequelize-typescript";
import { UserI } from '../../interfaces/user.interface';

@Table({
    timestamps: false
})
export abstract class UserDefinition extends Model<UserI> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  email!: string;
  
  @AllowNull(false)
  @Column(DataType.STRING(100))
  password!: string;

}
