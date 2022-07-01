import { TipoImovel } from "src/tipo-imovel/entities/tipo-imovel.entity";
import { TipoNegocio } from "src/tipo-negocio/entities/tipo-negocio.entity";
import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Lead extends BaseEntity {
    @ObjectIdColumn()
    id: string;
    @Column()
    nome: string;
    @Column()
    email: string;
    @Column()
    telefone: string;
    @Column()
    motivo: string;
    @Column()
    cep: string;
    @Column()
    createAt: number;
    @Column()
    updateAt: number;
    @Column()
    tipoNegocio?: Array<TipoNegocio>;
    @Column()
    tipoImovel?: Array<TipoImovel>;
}