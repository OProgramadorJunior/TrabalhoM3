import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImovelModule } from './imovel/imovel.module';
import { TipoNegocioModule } from './tipo-negocio/tipo-negocio.module';
import { TipoImovelModule } from './tipo-imovel/tipo-imovel.module';
import { LeadsModule } from './leads/leads.module';

@Module({
  imports: [ImovelModule, TipoNegocioModule, TipoImovelModule, LeadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
