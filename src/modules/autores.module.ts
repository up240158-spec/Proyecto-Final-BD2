import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from '../schemas/autor.schema';
import { AutoresController } from '../controllers/autores.controller';
import { AutoresService } from '../services/autores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Autor])],
  controllers: [AutoresController],
  providers: [AutoresService],
})
export class AutoresModule {}