import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Autor } from '../autores/autor.entity';
import { Categoria } from '../categorias/categoria.entity';
import { Prestamo } from '../prestamos/prestamo.entity';

@Entity('libros')
export class Libro {
  @PrimaryGeneratedColumn()
  id_libro: number;

  @Column()
  titulo: string;

  @Column()
  anio: number;

  @ManyToOne(() => Autor, (autor) => autor.libros)
  @JoinColumn({ name: 'autor_id' })
  autor: Autor;

  @ManyToOne(() => Categoria, (categoria) => categoria.libros)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.libro)
  prestamos: Prestamo[];
}