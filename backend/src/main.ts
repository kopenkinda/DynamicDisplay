import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const localhost = 3001;
  await app.listen(localhost);
  console.log(`Server is running as http://localhost:${localhost}`);
}
bootstrap();
