import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middleware/logger/logger.middleware';
import 'reflect-metadata';
import { CategoriesSeed } from './seeds/categories/categories.seed';
import { ProductsSeed } from './seeds/products/products.seed';
import { auth } from 'express-openid-connect';
import { auth0Config } from './config/auth0-config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerGlobal);
  app.use(
    auth({
      ...auth0Config,
    }),
  );
  const categoriesSeed = app.get(CategoriesSeed);
  await categoriesSeed.seed();
  console.log('La inserción de categorías ha terminado.');

  const productsSeed = app.get(ProductsSeed);
  await productsSeed.seed();
  console.log('La inserción de productos ha terminado.');
  await app.listen(3000);
}
bootstrap();
