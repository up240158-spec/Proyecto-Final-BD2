import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from '../schemas/autor.schema';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autor) private autorRepo: Repository<Autor>,
  ) {}

  obtenerAutores() {
    return this.autorRepo.find();
  }

  eliminarAutor(id: number) {
    return this.autorRepo.delete(id);
  }
}