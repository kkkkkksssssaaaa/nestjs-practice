import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Root Module 지정
  const app = await NestFactory.create(AppModule);
  // Nest.js 애플리케이션 포트 지정
  await app.listen(3000);
}
bootstrap();
