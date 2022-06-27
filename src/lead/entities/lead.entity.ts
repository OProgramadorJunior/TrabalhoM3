import { TipoImovel } from "src/tipo-imovel/entities/tipo-imovel.entity";
import { TipoNegocio } from "src/tipo-negocio/tipo-negocio";

export class Lead {
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