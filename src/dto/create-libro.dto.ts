import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateLibroDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNumber()
  anio: number;

  @IsNumber()
  autor_id: number;

  @IsNumber()
  categoria_id: number;
}