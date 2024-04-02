import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {INestApplication, INestApplicationContext} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

(async function (): Promise<void> {
  const appContext: INestApplicationContext = await NestFactory.createApplicationContext(AppModule)
  const configService: ConfigService = appContext.get(ConfigService)
  const app: INestApplication = await NestFactory.create(AppModule);

  await app.listen(configService.get<number>("APP_PORT")!);
})()