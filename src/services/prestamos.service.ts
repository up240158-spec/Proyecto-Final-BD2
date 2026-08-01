import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Prestamo } from '../schemas/prestamo.schema';
import { CreatePrestamoDto } from '../dto/create-prestamo.dto';

@Injectable()
export class PrestamosService {
  constructor(
    @InjectRepository(Prestamo) private prestamoRepo: Repository<Prestamo>,
  ) {}

  obtenerPrestamos() {
    return this.prestamoRepo.find({ relations: ['libro', 'usuario'] });
  }

  crearPrestamo(dto: CreatePrestamoDto) {
    const prestamo = this.prestamoRepo.create({
      libro: { id_libro: dto.libro_id },
      usuario: { id_usuario: dto.usuario_id },
      fecha_prestamo: new Date(dto.fecha_prestamo),
      fecha_devolucion: dto.fecha_devolucion ? new Date(dto.fecha_devolucion) : null,
    });
    return this.prestamoRepo.save(prestamo);
  }

  // Consulta con relaciones no.2: prestamos activos 
  prestamosActivos() {
    return this.prestamoRepo.find({
      where: { fecha_devolucion: IsNull() },
      relations: ['libro', 'usuario'],
    });
  }
}