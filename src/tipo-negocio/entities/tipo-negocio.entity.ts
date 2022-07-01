import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoNegocio extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    descricao: string;
}
