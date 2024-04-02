import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from '../auth/auth.controller';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { BearerTokenAuthGuard } from '../auth/by-bearer-token/bearer-token.guard';
import {ConfigureModule} from "../../configure/configure.module";
import {EmailingModule} from "../emailing/emailing.module";

@Module({
  imports: [ConfigureModule, DatabaseModule, AuthModule, EmailingModule],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: BearerTokenAuthGuard }
  ]
})
export class AppModule {}
