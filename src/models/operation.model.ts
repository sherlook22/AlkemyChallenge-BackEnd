import { BelongsTo, Column, ForeignKey, Table } from "sequelize-typescript";
import { OperationDefinition } from './definitions/operationDefiniton';
import { Type } from './type.model'

@Table
export class Operation extends OperationDefinition {
  
  @ForeignKey(() => Type)
  @Column
  typeId!: number

  @BelongsTo(() => Type)
  type!: Type

}
