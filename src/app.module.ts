import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoNegocioModule } from './tipo-negocio/tipo-negocio.module';
import { TipoImovelModule } from './tipo-imovel/tipo-imovel.module';
import { ImovelModule } from './imovel/imovel.module';
import { LeadModule } from './lead/lead.module';

@Module({
  imports: [ImovelModule, TipoNegocioModule, TipoImovelModule, LeadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
