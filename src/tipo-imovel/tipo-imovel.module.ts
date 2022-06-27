import { Module } from '@nestjs/common';
import { TipoImovelService } from './tipo-imovel.service';
import { TipoImovelController } from './tipo-imovel.controller';

@Module({
  controllers: [TipoImovelController],
  providers: [TipoImovelService]
})
export class TipoImovelModule {}
