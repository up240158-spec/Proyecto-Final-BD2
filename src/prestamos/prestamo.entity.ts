import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Libro } from '../libros/libro.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('prestamos')
export class Prestamo {
  @PrimaryGeneratedColumn()
  id_prestamo: number;

  @ManyToOne(() => Libro, (libro) => libro.prestamos)
  @JoinColumn({ name: 'libro_id' })
  libro: Libro;

  @ManyToOne(() => Usuario, (usuario) => usuario.prestamos)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'date' })
  fecha_prestamo: Date;

  @Column({ type: 'date', nullable: true })
  fecha_devolucion: Date;

  @Column({ default: false })
  devuelto: boolean;
}