import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoNegocioModule } from './tipo-negocio/tipo-negocio.module';
import { TipoImovelModule } from './tipo-imovel/tipo-imovel.module';
import { ImovelModule } from './imovel/imovel.module';
import { LeadModule } from './lead/lead.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://imobiliaria:Pn9ydIxYUZ9Yh8pH@servidor-01.o73wk.mongodb.net/?retryWrites=true&w=majority',
      database: 'imobiliaria-db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ImovelModule,
    TipoNegocioModule,
    TipoImovelModule,
    LeadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
