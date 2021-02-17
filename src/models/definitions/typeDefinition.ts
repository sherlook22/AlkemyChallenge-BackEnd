import { Model, Column, Table, DataType, AllowNull, PrimaryKey, HasMany } from "sequelize-typescript";
import { TypeI } from '../../interfaces/type.interface';

@Table({
    timestamps: false
})
export abstract class TypeDefinition extends Model<TypeI> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  name!: string;

}
