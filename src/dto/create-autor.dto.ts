import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAutorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  nacionalidad: string;
}