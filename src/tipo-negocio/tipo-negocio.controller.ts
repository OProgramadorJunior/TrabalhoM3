import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoNegocioService } from './tipo-negocio.service';
import { CreateTipoNegocioDto } from './dto/create-tipo-negocio.dto';
import { UpdateTipoNegocioDto } from './dto/update-tipo-negocio.dto';

@Controller('tipo-negocio')
export class TipoNegocioController {
  constructor(private readonly tipoNegocioService: TipoNegocioService) {}

  @Post()
  create(@Body() createTipoNegocioDto: CreateTipoNegocioDto) {
    return this.tipoNegocioService.create(createTipoNegocioDto);
  }

  @Get()
  findAll() {
    return this.tipoNegocioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoNegocioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoNegocioDto: UpdateTipoNegocioDto) {
    return this.tipoNegocioService.update(+id, updateTipoNegocioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoNegocioService.remove(+id);
  }
}
