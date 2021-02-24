import { BeforeCreate, BelongsTo, Column, ForeignKey, Table } from "sequelize-typescript";
import { OperationDefinition } from './definitions/operationDefiniton';
import { Type } from './type.model'

@Table
export class Operation extends OperationDefinition {
  
  @ForeignKey(() => Type)
  @Column
  typeId!: number

  @BelongsTo(() => Type)
  type!: Type

  @BeforeCreate
  static async validateAmount(op: Operation) {
    const { typeId } = op;
    const opType = await Type.findOne({where: { id: typeId }});

    console.log(typeId);
    

    if(opType.name === 'Ingreso') {
      op.amount = op.amount
    }

    if(opType.name === 'Egreso') {
      op.amount = -op.amount;
    }
  }

}
