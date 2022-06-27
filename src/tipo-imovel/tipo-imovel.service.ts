import { Injectable } from '@nestjs/common';
import { CreateTipoImovelDto } from './dto/create-tipo-imovel.dto';
import { UpdateTipoImovelDto } from './dto/update-tipo-imovel.dto';

@Injectable()
export class TipoImovelService {
  create(createTipoImovelDto: CreateTipoImovelDto) {
    return 'This action adds a new tipoImovel';
  }

  findAll() {
    return `This action returns all tipoImovel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoImovel`;
  }

  update(id: number, updateTipoImovelDto: UpdateTipoImovelDto) {
    return `This action updates a #${id} tipoImovel`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoImovel`;
  }
}
