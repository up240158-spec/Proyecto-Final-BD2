import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { LibrosService } from '../services/libros.service';
import { CreateLibroDto } from '../dto/create-libro.dto';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Post()
  crearLibro(@Body() dto: CreateLibroDto) {
    return this.librosService.crearLibro(dto);
  }

  @Get(':id')
  obtenerLibroPorId(@Param('id') id: number) {
    return this.librosService.obtenerLibroPorId(id);
  }

  // Consulta con relaciones no.1
  @Get('reportes/detalle')
  librosConAutorYCategoria() {
    return this.librosService.librosConAutorYCategoria();
  }
}