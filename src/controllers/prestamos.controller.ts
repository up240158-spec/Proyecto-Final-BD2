import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrestamosService } from '../services/prestamos.service';
import { CreatePrestamoDto } from '../dto/create-prestamo.dto';

@Controller('prestamos')
export class PrestamosController {
  constructor(private readonly prestamosService: PrestamosService) {}

  @Get()
  obtenerPrestamos() {
    return this.prestamosService.obtenerPrestamos();
  }

  @Post()
  crearPrestamo(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.crearPrestamo(dto);
  }

  // Consulta con relaciones no.2
  @Get('activos')
  prestamosActivos() {
    return this.prestamosService.prestamosActivos();
  }
}