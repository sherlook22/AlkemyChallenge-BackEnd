import { BeforeBulkUpdate, BeforeCreate, BeforeUpdate, BelongsTo, Column, ForeignKey, Table } from "sequelize-typescript";
import { OperationDefinition } from './definitions/operationDefiniton';
import { Type } from './type.model';
import { User } from './user.model'

@Table
export class Operation extends OperationDefinition {
  
  @ForeignKey(() => Type)
  @Column
  typeId!: number
  @BelongsTo(() => Type)
  type!: Type
  
  @ForeignKey(() => User)
  @Column
  userId!: number
  @BelongsTo(() => User)
  user!: User

  @BeforeUpdate
  @BeforeCreate
  static async validateAmount(op: Operation) {

    console.log(op);
    
    const { typeId } = op;
    const opType = await Type.findOne({where: { id: typeId }});
    
    if(opType.name === 'Egreso') {
      op.amount = op.amount >= 0 ? -op.amount : op.amount;
    }
  }

}
