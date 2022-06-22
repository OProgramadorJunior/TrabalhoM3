import { Module } from '@nestjs/common';
import { ImovelController } from './imovel.controller';
import { ImovelService } from './imovel.service';

@Module({
  controllers: [ImovelController],
  providers: [ImovelService]
})
export class ImovelModule {}
