import { LazyModuleLoader, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //optimi...
  const lazyModuleLoader = app.get(LazyModuleLoader);
  app.enableCors(); //activa esto
  //lo de abajo dio problema por eso lo come...
  //app.use(csurf()); //para evitar la transmision de comands mali...
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
