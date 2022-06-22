import { Test, TestingModule } from '@nestjs/testing';
import { TipoImovelController } from './tipo-imovel.controller';

describe('TipoImovelController', () => {
  let controller: TipoImovelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoImovelController],
    }).compile();

    controller = module.get<TipoImovelController>(TipoImovelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
