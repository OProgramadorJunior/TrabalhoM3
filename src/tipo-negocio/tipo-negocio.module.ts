import { Module } from '@nestjs/common';
import { TipoNegocioService } from './tipo-negocio.service';
import { TipoNegocioController } from './tipo-negocio.controller';

@Module({
  controllers: [TipoNegocioController],
  providers: [TipoNegocioService]
})
export class TipoNegocioModule {}
