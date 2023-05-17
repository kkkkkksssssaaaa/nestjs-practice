import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const portNumber = 3000;
  // Root Module 지정
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'error', 'log', 'verbose', 'warn'],
  });
  // Nest.js 애플리케이션 포트 지정
  await app.listen(portNumber);
}
bootstrap();
