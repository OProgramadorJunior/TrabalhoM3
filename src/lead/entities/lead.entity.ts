import { TipoImovel } from "src/tipo-imovel/entities/tipo-imovel.entity";
import { TipoNegocio } from "src/tipo-negocio/tipo-negocio";
import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lead extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    nome: string;
    email: string;
    telefone: string;
    motivo: string;
    cep: string;
    createAt: number;
    updateAt: number;
    tipoNegocio?: Array<TipoNegocio>;
    tipoImovel?: Array<TipoImovel>;
}