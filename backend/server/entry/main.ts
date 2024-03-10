import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve } from "node:path"
import { config } from "dotenv";
import * as process from 'process';
import { INestApplication, INestApplicationContext, Injectable } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
config({path: resolve() + "/.env"});

export let di: INestApplicationContext

(async function (): Promise<void> {
  di = await NestFactory.createApplicationContext(AppModule)
  const app: INestApplication = await NestFactory.create(AppModule);

  await app.listen(process.env.APP_PORT);
})()