import { Imovel } from './entities/imovel.entity';
import { Module } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { ImovelController } from './imovel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Imovel]),
  ],
  controllers: [ImovelController],
  providers: [ImovelService]
})
export class ImovelModule {}
