import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app) //swagger
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
