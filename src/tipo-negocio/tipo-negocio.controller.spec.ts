import { Test, TestingModule } from '@nestjs/testing';
import { TipoNegocioController } from './tipo-negocio.controller';
import { TipoNegocioService } from './tipo-negocio.service';

describe('TipoNegocioController', () => {
  let controller: TipoNegocioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoNegocioController],
      providers: [TipoNegocioService],
    }).compile();

    controller = module.get<TipoNegocioController>(TipoNegocioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
