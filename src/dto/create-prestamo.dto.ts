export class CreatePrestamoDto {
  libro_id: number;
  usuario_id: number;
  fecha_prestamo: string;
  fecha_devolucion: string;
  devuelto: boolean;
}