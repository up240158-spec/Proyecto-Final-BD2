import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Autor } from './autores/autor.entity';
import { Categoria } from './categorias/categoria.entity';
import { CreateCategoriaDto } from './categorias/dto/create-categoria.dto';

import { Libro } from './libros/libro.entity';
import { CreateLibroDto } from './libros/dto/create-libro.dto';

import { Usuario } from './usuarios/usuario.entity';
import { CreateUsuarioDto } from './usuarios/dto/create-usuario.dto';

import { Prestamo } from './prestamos/prestamo.entity';
import { CreatePrestamoDto } from './prestamos/dto/create-prestamo.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Autor) private autorRepo: Repository<Autor>,
    @InjectRepository(Categoria) private categoriaRepo: Repository<Categoria>,
    @InjectRepository(Libro) private libroRepo: Repository<Libro>,
    @InjectRepository(Usuario) private usuarioRepo: Repository<Usuario>,
    @InjectRepository(Prestamo) private prestamoRepo: Repository<Prestamo>,
  ) {}

  //  AUTORES 
  obtenerAutores() {
    return this.autorRepo.find();
  }
  eliminarAutor(id: number) {
    return this.autorRepo.delete(id);
  }

  //  CATEGORIAS 
  crearCategoria(dto: CreateCategoriaDto) {
    return this.categoriaRepo.save(dto);
  }
  async actualizarCategoria(id: number, dto: CreateCategoriaDto) {
    await this.categoriaRepo.update(id, dto);
    return this.categoriaRepo.findOneBy({ id_categoria: id });
  }

  // LIBROS 
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
      relations: ['autor', 'categoria'],
    });
  }

  // USUARIOS 
  async actualizarUsuario(id: number, dto: CreateUsuarioDto) {
    await this.usuarioRepo.update(id, dto);
    return this.usuarioRepo.findOneBy({ id_usuario: id });
  }
  eliminarUsuario(id: number) {
    return this.usuarioRepo.delete(id);
  }

  //  PRESTAMOS 
  obtenerPrestamos() {
    return this.prestamoRepo.find({ relations: ['libro', 'usuario'] });
  }
  crearPrestamo(dto: CreatePrestamoDto) {
    const prestamo = this.prestamoRepo.create({
      libro: { id_libro: dto.libro_id },
      usuario: { id_usuario: dto.usuario_id },
      fecha_prestamo: new Date(dto.fecha_prestamo),
      fecha_devolucion: dto.fecha_devolucion ? new Date(dto.fecha_devolucion) : null,
      devuelto: dto.devuelto ?? false,
    });
    return this.prestamoRepo.save(prestamo);
  }

  // CONSULTAS CON RELACIONES (mínimo 2 que pide el profe) 
  librosConAutorYCategoria() {
    return this.libroRepo.find({ relations: ['autor', 'categoria'] });
  }
  prestamosActivos() {
    return this.prestamoRepo.find({
      where: { devuelto: false },
      relations: ['libro', 'usuario'],
    });
  }
}