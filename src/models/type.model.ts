import { HasMany, Table } from "sequelize-typescript";
import { TypeDefinition } from './definitions/typeDefinition';
import { Operation } from './operation.model'

@Table
export class Type extends TypeDefinition {
  
    @HasMany(() => Operation)
    operations!: Operation;

}
