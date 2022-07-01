import { Module } from '@nestjs/common';
import { TipoNegocioService } from './tipo-negocio.service';
import { TipoNegocioController } from './tipo-negocio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoNegocio } from './entities/tipo-negocio.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TipoNegocio])],
  controllers: [TipoNegocioController],
  providers: [TipoNegocioService],
})
export class TipoNegocioModule {}
