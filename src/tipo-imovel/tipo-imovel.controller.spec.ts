import { Test, TestingModule } from '@nestjs/testing';
import { TipoImovelController } from './tipo-imovel.controller';
import { TipoImovelService } from './tipo-imovel.service';

describe('TipoImovelController', () => {
  let controller: TipoImovelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoImovelController],
      providers: [TipoImovelService],
    }).compile();

    controller = module.get<TipoImovelController>(TipoImovelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
