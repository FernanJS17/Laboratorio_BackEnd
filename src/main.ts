import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Obtener el valor de las variables de entorno usando ConfigService
  const configService = app.get(ConfigService);

  // Obtener las variables de entorno
  const frontendUrl = configService.get<string>(
    'FRONTEND_URL',
    'http://localhost:4200',
  ); // URL por defecto si no está definida

  // Registro del filtro global
  app.useGlobalFilters(new GlobalExceptionFilter());

  app.enableCors({
    origin: frontendUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Configurar el puerto, como antes
  const port = configService.get<number>('PORT', 3000);
  await app.listen(port);
}
bootstrap();
