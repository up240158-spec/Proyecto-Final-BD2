import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from './autores/autor.entity';
import { Categoria } from './categorias/categoria.entity';
import { Libro } from './libros/libro.entity';
import { Usuario } from './usuarios/usuario.entity';
import { Prestamo } from './prestamos/prestamo.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Autor) private autorRepo: Repository<Autor>,
    @InjectRepository(Categoria) private categoriaRepo: Repository<Categoria>,
    @InjectRepository(Libro) private libroRepo: Repository<Libro>,
    @InjectRepository(Usuario) private usuarioRepo: Repository<Usuario>,
    @InjectRepository(Prestamo) private prestamoRepo: Repository<Prestamo>,
  ) {}

  // AUTORES 
  findAllAutores() {
    return this.autorRepo.find();
  }
  findOneAutor(id: number) {
    return this.autorRepo.findOneBy({ id_autor: id });
  }
  createAutor(data: Partial<Autor>) {
    return this.autorRepo.save(data);
  }
  async updateAutor(id: number, data: Partial<Autor>) {
    await this.autorRepo.update(id, data);
    return this.findOneAutor(id);
  }
  deleteAutor(id: number) {
    return this.autorRepo.delete(id);
  }

  // CATEGORIAS 
  findAllCategorias() {
    return this.categoriaRepo.find();
  }
  findOneCategoria(id: number) {
    return this.categoriaRepo.findOneBy({ id_categoria: id });
  }
  createCategoria(data: Partial<Categoria>) {
    return this.categoriaRepo.save(data);
  }
  async updateCategoria(id: number, data: Partial<Categoria>) {
    await this.categoriaRepo.update(id, data);
    return this.findOneCategoria(id);
  }
  deleteCategoria(id: number) {
    return this.categoriaRepo.delete(id);
  }

  // LIBROS 
  findAllLibros() {
    return this.libroRepo.find({ relations: ['autor', 'categoria'] });
  }
  findOneLibro(id: number) {
    return this.libroRepo.findOne({
      where: { id_libro: id },
      relations: ['autor', 'categoria'],
    });
  }
  createLibro(data: any) {
    const libro = this.libroRepo.create({
      titulo: data.titulo,
      anio: data.anio,
      autor: { id_autor: data.autor_id },
      categoria: { id_categoria: data.categoria_id },
    });
    return this.libroRepo.save(libro);
  }
  async updateLibro(id: number, data: any) {
    const libro: any = { titulo: data.titulo, anio: data.anio };
    if (data.autor_id) libro.autor = { id_autor: data.autor_id };
    if (data.categoria_id) libro.categoria = { id_categoria: data.categoria_id };
    await this.libroRepo.update(id, libro);
    return this.findOneLibro(id);
  }
  deleteLibro(id: number) {
    return this.libroRepo.delete(id);
  }

  // USUARIOS 
  findAllUsuarios() {
    return this.usuarioRepo.find();
  }
  findOneUsuario(id: number) {
    return this.usuarioRepo.findOneBy({ id_usuario: id });
  }
  createUsuario(data: Partial<Usuario>) {
    return this.usuarioRepo.save(data);
  }
  async updateUsuario(id: number, data: Partial<Usuario>) {
    await this.usuarioRepo.update(id, data);
    return this.findOneUsuario(id);
  }
  deleteUsuario(id: number) {
    return this.usuarioRepo.delete(id);
  }

  // PRESTAMOS 
  findAllPrestamos() {
    return this.prestamoRepo.find({ relations: ['libro', 'usuario'] });
  }
  findOnePrestamo(id: number) {
    return this.prestamoRepo.findOne({
      where: { id_prestamo: id },
      relations: ['libro', 'usuario'],
    });
  }
  createPrestamo(data: any) {
    const prestamo = this.prestamoRepo.create({
      libro: { id_libro: data.libro_id },
      usuario: { id_usuario: data.usuario_id },
      fecha_prestamo: data.fecha_prestamo,
      fecha_devolucion: data.fecha_devolucion,
      devuelto: data.devuelto ?? false,
    });
    return this.prestamoRepo.save(prestamo);
  }
  async updatePrestamo(id: number, data: any) {
    await this.prestamoRepo.update(id, data);
    return this.findOnePrestamo(id);
  }
  deletePrestamo(id: number) {
    return this.prestamoRepo.delete(id);
  }

  // ---------- CONSULTAS CON RELACIONES ----------
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