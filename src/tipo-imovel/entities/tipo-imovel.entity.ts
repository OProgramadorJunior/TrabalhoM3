import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class TipoImovel extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    descricao: string;
}
