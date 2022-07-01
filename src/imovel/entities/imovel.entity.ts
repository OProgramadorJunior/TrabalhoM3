import { TipoImovel } from "src/tipo-imovel/entities/tipo-imovel.entity";
import { Entity, Column, BaseEntity, ObjectIdColumn } from 'typeorm';
import { TipoNegocio } from "src/tipo-negocio/entities/tipo-negocio.entity";

@Entity()
export class Imovel extends BaseEntity {
    @ObjectIdColumn()
    id: string;
    @Column()
    nome: string;
    @Column()
    descricao: string;
    @Column()
    descricaoCompleta: string;
    @Column()
    metrosConstruido?: number;
    @Column()
    metrosTotais: number;
    @Column()
    informacoes?: Array<string>;
    @Column()
    informacoesEmpreendimento?: Array<string>;
    @Column()
    imagens: Array<string>;
    @Column()
    comodos: Array<{
        nome: string;
        quantidade?: number;
        descricao?: string;
        icone?: string;
        destaque?: boolean;
    }>;
    @Column()
    valor: number;
    @Column()
    tipoNegocio: TipoNegocio;
    @Column()
    estado: string;
    @Column()
    cidade: string;
    @Column()
    bairro: string;
    @Column()
    tipoImovel: TipoImovel;
    @Column()
    status: boolean;
    @Column()
    geoLocation?: {
        lat: number,
        lng: number
    }
}