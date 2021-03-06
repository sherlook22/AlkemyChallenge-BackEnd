import { Model, Column, Table, DataType, AllowNull, PrimaryKey, HasMany } from "sequelize-typescript";
import { TypeI } from '../../interfaces/type.interface';

@Table({
    timestamps: false
})
export abstract class TypeDefinition extends Model<TypeI> {
  @AllowNull(false)
  @Column(DataType.STRING(100))
  name!: string;
  
}
