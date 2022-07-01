import { Lead } from './lead/entities/lead.entity';
import { TipoNegocio } from 'src/tipo-negocio/tipo-negocio';
import { TipoImovel } from 'src/tipo-imovel/entities/tipo-imovel.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoNegocioModule } from './tipo-negocio/tipo-negocio.module';
import { TipoImovelModule } from './tipo-imovel/tipo-imovel.module';
import { ImovelModule } from './imovel/imovel.module';
import { LeadModule } from './lead/lead.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from '@adminjs/nestjs';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/typeorm';
import { Imovel } from './imovel/entities/imovel.entity';

AdminJS.registerAdapter({ Database, Resource });
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_CONNECTION_STRING,
      database: process.env.MONGODB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    AdminModule.createAdmin({
      adminJsOptions: {
        rootPath: '/admin',
        resources: [Imovel, TipoImovel, Lead]
      },
      auth: {
        authenticate: async (email, password) => Promise.resolve({ email: 'test' }),
        cookieName: 'test',
        cookiePassword: 'test',
      }
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
