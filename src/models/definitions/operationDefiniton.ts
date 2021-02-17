import { Model, Column, Table, DataType, AllowNull, HasOne, ForeignKey } from "sequelize-typescript";
import { OperationI } from '../../interfaces/operation.interface';

@Table({
    timestamps: false
})
export abstract class OperationDefinition extends Model<OperationI> {
  @AllowNull(false)
  @Column(DataType.STRING(100))
  concept!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  amount!: number;
  
  @AllowNull(false)
  @Column(DataType.DATE)
  date!: Date;

}
