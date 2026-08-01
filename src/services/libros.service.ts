import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from '../schemas/libro.schema';
import { CreateLibroDto } from '../dto/create-libro.dto';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro) private libroRepo: Repository<Libro>,
  ) {}

  crearLibro(dto: CreateLibroDto) {
    const libro = this.libroRepo.create({
      titulo: dto.titulo,
      anio: dto.anio,
      autor: { id_autor: dto.autor_id },
      categoria: { id_categoria: dto.categoria_id },
    });
    return this.libroRepo.save(libro);
  }

  obtenerLibroPorId(id: number) {
    return this.libroRepo.findOne({
      where: { id_libro: id },
      relations: { autor: true, categoria: true },
    });
  }

  // Consulta con relaciones no.1: libros con nombre de autor y categoría
  librosConAutorYCategoria() {
    return this.libroRepo.find({ relations: { autor: true, categoria: true } });
  }
}