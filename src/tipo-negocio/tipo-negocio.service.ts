import { Injectable } from '@nestjs/common';
import { CreateTipoNegocioDto } from './dto/create-tipo-negocio.dto';
import { UpdateTipoNegocioDto } from './dto/update-tipo-negocio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoNegocio } from './entities/tipo-negocio.entity';

@Injectable()
export class TipoNegocioService {
  constructor(
    @InjectRepository(TipoNegocio)
    private tipoNegocioRepository: Repository<TipoNegocio>,
  ) {}

  create(createImovelDto: CreateTipoNegocioDto) {
    return this.tipoNegocioRepository.save(createImovelDto);
  }

  findAll() {
    return this.tipoNegocioRepository.find();
  }

  findOne(id: string) {
    return this.tipoNegocioRepository.findOne({where: {id}});
  }

  update(id: string, updateImovelDto: UpdateTipoNegocioDto) {
    return this.tipoNegocioRepository.update(id, updateImovelDto);
  }

  remove(id: string) {
    return this.tipoNegocioRepository.delete(id);
  }
}
