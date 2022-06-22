import { Test, TestingModule } from '@nestjs/testing';
import { TipoImovelService } from './tipo-imovel.service';

describe('TipoImovelService', () => {
  let service: TipoImovelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoImovelService],
    }).compile();

    service = module.get<TipoImovelService>(TipoImovelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
