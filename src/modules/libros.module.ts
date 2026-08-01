import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from '../schemas/libro.schema';
import { LibrosController } from '../controllers/libros.controller';
import { LibrosService } from '../services/libros.service';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])],
  controllers: [LibrosController],
  providers: [LibrosService],
})
export class LibrosModule {}