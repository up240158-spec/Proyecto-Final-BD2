import { Controller, Get, Delete, Param } from '@nestjs/common';
import { AutoresService } from '../services/autores.service';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get()
  obtenerAutores() {
    return this.autoresService.obtenerAutores();
  }

  @Delete(':id')
  eliminarAutor(@Param('id') id: number) {
    return this.autoresService.eliminarAutor(id);
  }
}