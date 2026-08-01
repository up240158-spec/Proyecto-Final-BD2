import { Controller, Post, Put, Param, Body } from '@nestjs/common';
import { CategoriasService } from '../services/categorias.service';
import { CreateCategoriaDto } from '../dto/create-categoria.dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  crearCategoria(@Body() dto: CreateCategoriaDto) {
    return this.categoriasService.crearCategoria(dto);
  }

  @Put(':id')
  actualizarCategoria(@Param('id') id: number, @Body() dto: CreateCategoriaDto) {
    return this.categoriasService.actualizarCategoria(id, dto);
  }
}