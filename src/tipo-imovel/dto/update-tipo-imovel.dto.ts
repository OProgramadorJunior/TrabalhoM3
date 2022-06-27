import { PartialType } from '@nestjs/swagger';
import { CreateTipoImovelDto } from './create-tipo-imovel.dto';

export class UpdateTipoImovelDto extends PartialType(CreateTipoImovelDto) {}
