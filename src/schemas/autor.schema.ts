import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Libro } from './libro.schema';

@Entity('autores')
export class Autor {
  @PrimaryGeneratedColumn()
  id_autor: number;

  @Column()
  nombre: string;

  @Column()
  nacionalidad: string;

  @OneToMany(() => Libro, (libro) => libro.autor)
  libros: Libro[];
}