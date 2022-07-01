import { TipoImovel } from "src/tipo-imovel/entities/tipo-imovel.entity";
import { IsEmail, IsString, IsNotEmpty, MinLength, Matches } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity } from 'typeorm';
import { TipoNegocio } from "src/tipo-negocio/tipo-negocio";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Imovel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty()
    nome: string;
    @ApiProperty()
    descricao: string;
    @ApiProperty()
    descricaoCompleta: string;
    metrosConstruido?: number;
    metrosTotais: number;
    informacoes?: Array<string>;
    informacoesEmpreendimento?: Array<string>;
    imagens: Array<string>;
    // comodos: Array<{
    //     nome: string;
    //     quantidade?: number;
    //     descricao?: string;
    //     icone?: string;
    //     destaque?: boolean;
    // }>;
    valor: number;
    // tipoNegocio: TipoNegocio;
    estado: string;
    cidade: string;
    bairro: string;
    // tipoImovel: TipoImovel;
    status: boolean;
    geoLocation?: {
        lat: number,
        lng: number
    }
}