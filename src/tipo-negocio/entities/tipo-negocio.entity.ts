import { BaseEntity, Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoNegocio extends BaseEntity {
    @ObjectIdColumn()
    id: string;
    @Column()
    descricao: string;
}
