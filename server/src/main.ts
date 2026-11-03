import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Every route lives under /api, e.g. GET /api/profile
  app.setGlobalPrefix('api');

  // Allow the React app (dev server or deployed site) to call this API
  app.enableCors({ origin: process.env.CLIENT_URL ?? 'http://localhost:5173' });

  // Validate request bodies against DTO classes and drop unknown fields
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const port = Number(process.env.PORT) || 3000;
  await app.listen(port);
  console.log(`API running on http://localhost:${port}/api`);
}
await bootstrap();
