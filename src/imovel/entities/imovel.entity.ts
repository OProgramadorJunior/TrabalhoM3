import { TipoImovel } from "src/tipo-imovel/entities/tipo-imovel.entity";
import { TipoNegocio } from "src/tipo-negocio/tipo-negocio";

export class Imovel {
    id: number;
    nome: string;
    descricao: string;
    descricaoCompleta: string;
    metrosConstruido?: number;
    metrosTotais: number;
    informacoes?: Array<string>;
    informacoesEmpreendimento?: Array<string>;
    imagens: Array<string>;
    comodos: Array<{
        nome: string;
        quantidade?: number;
        descricao?: string;
        icone?: string;
        destaque?: boolean;
    }>;
    valor: number;
    tipoNegocio: TipoNegocio;
    estado: string;
    cidade: string;
    bairro: string;
    tipoImovel: TipoImovel;
    status: boolean;
    geoLocation?: {
        lat: number,
        lng: number
    }
}