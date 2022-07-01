import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoImovel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    descricao: string;
}
