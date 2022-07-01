import { Imovel } from './entities/imovel.entity';
import { Injectable } from '@nestjs/common';
import { CreateImovelDto } from './dto/create-imovel.dto';
import { UpdateImovelDto } from './dto/update-imovel.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ImovelService {

  constructor(
    @InjectRepository(Imovel)
    private imovelRepository: Repository<Imovel>,
  ) {}

  create(createImovelDto: CreateImovelDto) {
    return this.imovelRepository.save(createImovelDto);
  }

  findAll() {
    return this.imovelRepository.find();
  }

  findOne(id: string) {
    return this.imovelRepository.findOne({where: {id}});
  }

  update(id: string, updateImovelDto: UpdateImovelDto) {
    return this.imovelRepository.update(id, updateImovelDto);
  }

  remove(id: string) {
    return this.imovelRepository.delete(id);
  }
}
