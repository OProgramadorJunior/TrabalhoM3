import { Test, TestingModule } from '@nestjs/testing';
import { TipoNegocioService } from './tipo-negocio.service';

describe('TipoNegocioService', () => {
  let service: TipoNegocioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoNegocioService],
    }).compile();

    service = module.get<TipoNegocioService>(TipoNegocioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
