import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoImovelService } from './tipo-imovel.service';
import { CreateTipoImovelDto } from './dto/create-tipo-imovel.dto';
import { UpdateTipoImovelDto } from './dto/update-tipo-imovel.dto';

@Controller('tipo-imovel')
export class TipoImovelController {
  constructor(private readonly tipoImovelService: TipoImovelService) {}

  @Post()
  create(@Body() createTipoImovelDto: CreateTipoImovelDto) {
    return this.tipoImovelService.create(createTipoImovelDto);
  }

  @Get()
  findAll() {
    return this.tipoImovelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoImovelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoImovelDto: UpdateTipoImovelDto) {
    return this.tipoImovelService.update(+id, updateTipoImovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoImovelService.remove(+id);
  }
}
