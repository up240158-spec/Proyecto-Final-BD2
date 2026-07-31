import {}

export class CreatePrestamoDto {
  libro_id: number;
  usuario_id: number;
  @IsDate()
  fecha_prestamo: Date;
  fecha_devolucion: Date;
  //devuelto: boolean;
}