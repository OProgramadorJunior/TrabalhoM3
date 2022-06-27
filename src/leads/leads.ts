import { TipoImovel } from './../tipo-imovel/tipo-imovel';
import { TipoNegocio } from './../tipo-negocio/tipo-negocio';
import { Entity } from 'typeorm';

@Entity()
export class Leads {
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
