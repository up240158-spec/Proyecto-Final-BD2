import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Libro } from '../libros/libro.entity';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column()
  nombre: string;

  @OneToMany(() => Libro, (libro) => libro.categoria)
  libros: Libro[];
}