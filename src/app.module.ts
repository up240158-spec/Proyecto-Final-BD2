import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Autor } from './autores/autor.entity';
import { Categoria } from './categorias/categoria.entity';
import { Libro } from './libros/libro.entity';
import { Usuario } from './usuarios/usuario.entity';
import { Prestamo } from './prestamos/prestamo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
    }),
    TypeOrmModule.forFeature([Autor, Categoria, Libro, Usuario, Prestamo]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}