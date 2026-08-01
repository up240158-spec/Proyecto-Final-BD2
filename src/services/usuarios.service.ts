import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../schemas/usuario.schema';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepo: Repository<Usuario>,
  ) {}

  async actualizarUsuario(id: number, dto: CreateUsuarioDto) {
    await this.usuarioRepo.update(id, dto);
    return this.usuarioRepo.findOneBy({ id_usuario: id });
  }

  eliminarUsuario(id: number) {
    return this.usuarioRepo.delete(id);
  }
}