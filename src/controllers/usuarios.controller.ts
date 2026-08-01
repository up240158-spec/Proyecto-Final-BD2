import { Controller, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from '../services/usuarios.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Put(':id')
  actualizarUsuario(@Param('id') id: number, @Body() dto: CreateUsuarioDto) {
    return this.usuariosService.actualizarUsuario(id, dto);
  }

  @Delete(':id')
  eliminarUsuario(@Param('id') id: number) {
    return this.usuariosService.eliminarUsuario(id);
  }
}