import { Lead } from './entities/lead.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';

@Injectable()
export class LeadService {
  constructor(
    @InjectRepository(Lead)
    private leadRepository: Repository<Lead>,
  ) {}

  create(createImovelDto: CreateLeadDto) {
    return this.leadRepository.save(createImovelDto);
  }

  findAll() {
    return this.leadRepository.find();
  }

  findOne(id: string) {
    return this.leadRepository.findOne({where: {id}});
  }

  update(id: string, updateImovelDto: UpdateLeadDto) {
    return this.leadRepository.update(id, updateImovelDto);
  }

  remove(id: string) {
    return this.leadRepository.delete(id);
  }
}
