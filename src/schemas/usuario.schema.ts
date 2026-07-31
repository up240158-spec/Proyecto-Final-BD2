import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Prestamo } from './prestamo.schema';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.usuario)
  prestamos: Prestamo[];
}