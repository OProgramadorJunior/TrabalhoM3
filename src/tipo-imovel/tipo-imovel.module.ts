import { TipoImovel } from 'src/tipo-imovel/entities/tipo-imovel.entity';
import { Module } from '@nestjs/common';
import { TipoImovelService } from './tipo-imovel.service';
import { TipoImovelController } from './tipo-imovel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoImovel])],
  controllers: [TipoImovelController],
  providers: [TipoImovelService],
})
export class TipoImovelModule {}