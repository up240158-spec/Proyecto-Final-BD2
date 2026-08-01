import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../schemas/categoria.schema';
import { CreateCategoriaDto } from '../dto/create-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria) private categoriaRepo: Repository<Categoria>,
  ) {}

  crearCategoria(dto: CreateCategoriaDto) {
    return this.categoriaRepo.save(dto);
  }

  async actualizarCategoria(id: number, dto: CreateCategoriaDto) {
    await this.categoriaRepo.update(id, dto);
    return this.categoriaRepo.findOneBy({ id_categoria: id });
  }
}