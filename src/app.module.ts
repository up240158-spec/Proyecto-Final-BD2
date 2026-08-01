import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AutoresModule } from './modules/autores.module';
import { CategoriasModule } from './modules/categorias.module';
import { LibrosModule } from './modules/libros.module';
import { UsuariosModule } from './modules/usuarios.module';
import { PrestamosModule } from './modules/prestamos.module';

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
        entities: [__dirname + '/schemas/*.schema{.ts,.js}'],
        synchronize: false,
      }),
    }),
    AutoresModule,
    CategoriasModule,
    LibrosModule,
    UsuariosModule,
    PrestamosModule,
  ],
})
export class AppModule {}