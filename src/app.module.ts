import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // Conexión a MongoDB usando ConfigService
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Importar ConfigModule para acceder a las variables de entorno
      inject: [ConfigService], // Inyectar ConfigService
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), // Acceder a MONGO_URI desde .env
      }),
    }),

    // Módulos de funcionalidad
    PostsModule,
    CommentsModule,

    // Configuración de variables de entorno
    ConfigModule.forRoot({
      isGlobal: true, // Para que ConfigService esté disponible globalmente
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
