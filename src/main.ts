import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS' });

  const config = new DocumentBuilder()
    .setTitle('Hotel Management API')
    .setDescription('CRUD operations to manage room types, rooms and bookings')
    .setVersion('1.0')
    .addTag('Room Types')
    .addTag('Rooms')
    .addTag('Bookings')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
