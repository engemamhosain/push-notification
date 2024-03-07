import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger,ValidationPipe } from '@nestjs/common';
async function bootstrap() {
 
  const app = await NestFactory.create(AppModule, {
    logger: ['log','error', 'warn','debug','verbose'],
  });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());  
  app.setGlobalPrefix('notification_service');
  const config = new DocumentBuilder()
    .setTitle('Notification')
    .setDescription('The Notification API description')
    .setVersion('1.0')
    .addTag('Notification')
    
    .addServer(process.env.SWAGGER_BASE_URL)
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT',
      )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('notification_service/api-list', app, document);


  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
