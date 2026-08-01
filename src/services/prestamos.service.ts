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
    return this.prestamoRepo.find({ relations: { libro: true, usuario: true } });
  }

  crearPrestamo(dto: CreatePrestamoDto) {
    const prestamo = new Prestamo();
    prestamo.libro = { id_libro: dto.libro_id } as any;
    prestamo.usuario = { id_usuario: dto.usuario_id } as any;
    prestamo.fecha_prestamo = new Date(dto.fecha_prestamo);
    prestamo.fecha_devolucion = dto.fecha_devolucion ? new Date(dto.fecha_devolucion) : null;
    return this.prestamoRepo.save(prestamo);
  }

  // Consulta con relaciones no.2: préstamos activos (sin fecha de devolución)
  prestamosActivos() {
    return this.prestamoRepo.find({
      where: { fecha_devolucion: IsNull() },
      relations: { libro: true, usuario: true },
    });
  }
}