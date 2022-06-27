import { Injectable } from '@nestjs/common';
import { CreateTipoNegocioDto } from './dto/create-tipo-negocio.dto';
import { UpdateTipoNegocioDto } from './dto/update-tipo-negocio.dto';

@Injectable()
export class TipoNegocioService {
  create(createTipoNegocioDto: CreateTipoNegocioDto) {
    return 'This action adds a new tipoNegocio';
  }

  findAll() {
    return `This action returns all tipoNegocio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoNegocio`;
  }

  update(id: number, updateTipoNegocioDto: UpdateTipoNegocioDto) {
    return `This action updates a #${id} tipoNegocio`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoNegocio`;
  }
}
