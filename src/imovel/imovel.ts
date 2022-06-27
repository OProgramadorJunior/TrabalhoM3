import { TipoImovel } from './../tipo-imovel/tipo-imovel';
import { TipoNegocio } from './../tipo-negocio/tipo-negocio';
import { Entity } from 'typeorm';

@Entity()
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
