import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoImovel {
    @PrimaryGeneratedColumn()
    id: number;
    descricao: string;
}
