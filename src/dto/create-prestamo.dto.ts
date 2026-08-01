import { IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreatePrestamoDto {
  @IsNumber()
  libro_id: number;

  @IsNumber()
  usuario_id: number;

  @IsDateString()
  fecha_prestamo: string;

  @IsOptional()
  @IsDateString()
  fecha_devolucion: string;
}