import { Entity } from 'typeorm';

@Entity()
export class TipoImovel {
    id: number;
    descricao: string;
}

// 'Casa' = 1,
// 'Terreno' = 2,
// 'Sala' = 3,
// 'Apartamento' = 4,
// 'Galpão' = 5,
// 'Sítio' = 6