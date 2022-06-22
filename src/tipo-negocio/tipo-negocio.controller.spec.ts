import { Test, TestingModule } from '@nestjs/testing';
import { TipoNegocioController } from './tipo-negocio.controller';

describe('TipoNegocioController', () => {
  let controller: TipoNegocioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoNegocioController],
    }).compile();

    controller = module.get<TipoNegocioController>(TipoNegocioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
