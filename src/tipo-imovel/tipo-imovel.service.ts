import { TipoImovel } from './entities/tipo-imovel.entity';
import { Injectable } from '@nestjs/common';
import { CreateTipoImovelDto } from './dto/create-tipo-imovel.dto';
import { UpdateTipoImovelDto } from './dto/update-tipo-imovel.dto';
import { DeleteResult, ObjectID, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoImovelService {
  constructor(
    @InjectRepository(TipoImovel)
    private tipoTipoImovelRepository: Repository<TipoImovel>,
  ) {}

  async create(createTipoImovelDto: CreateTipoImovelDto): Promise<TipoImovel> {
    return await this.tipoTipoImovelRepository.save(createTipoImovelDto);
  }

  async findAll(): Promise<TipoImovel[]> {
    return await this.tipoTipoImovelRepository.find();
  }

  async findOne(id: ObjectID): Promise<TipoImovel> {
    return await this.tipoTipoImovelRepository.findOne({ where: { id } });
  }

  async update(
    id: ObjectID,
    updateTipoImovelDto: UpdateTipoImovelDto,
  ): Promise<UpdateResult> {
    return await this.tipoTipoImovelRepository.update(id, updateTipoImovelDto);
  }

  async remove(id: ObjectID): Promise<DeleteResult> {
    return await this.tipoTipoImovelRepository.delete(id);
  }
}
