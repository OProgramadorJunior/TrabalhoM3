import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoNegocio {
    @PrimaryGeneratedColumn()
    id: number;
    descricao: string;
}
