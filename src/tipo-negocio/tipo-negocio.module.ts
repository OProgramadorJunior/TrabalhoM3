import { Module } from '@nestjs/common';
import { TipoNegocioController } from './tipo-negocio.controller';
import { TipoNegocioService } from './tipo-negocio.service';

@Module({
  controllers: [TipoNegocioController],
  providers: [TipoNegocioService]
})
export class TipoNegocioModule {}
