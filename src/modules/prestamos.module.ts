import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from '../schemas/prestamo.schema';
import { PrestamosController } from '../controllers/prestamos.controller';
import { PrestamosService } from '../services/prestamos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamo])],
  controllers: [PrestamosController],
  providers: [PrestamosService],
})
export class PrestamosModule {}