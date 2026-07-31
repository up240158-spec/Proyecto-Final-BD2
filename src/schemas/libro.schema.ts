import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Autor } from './autor.schema';
import { Categoria } from './categoria.schema';
import { Prestamo } from './prestamo.schema';

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