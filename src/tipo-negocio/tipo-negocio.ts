import { Entity } from "typeorm";

@Entity()
export class TipoNegocio {
    id: number;
    descricao: string;
}
// 'Aluga' = 1,
// 'Troca' = 2,
// 'Venda' = 3,
// 'Venda/Aluga' = 4,
// 'Venda/Troca' = 5

