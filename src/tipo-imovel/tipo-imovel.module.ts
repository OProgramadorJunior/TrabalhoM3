import { Module } from '@nestjs/common';
import { TipoImovelController } from './tipo-imovel.controller';
import { TipoImovelService } from './tipo-imovel.service';

@Module({
  controllers: [TipoImovelController],
  providers: [TipoImovelService]
})
export class TipoImovelModule {}
