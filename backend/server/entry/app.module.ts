import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from '../auth/auth.controller';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { APP_GUARD, NestFactory } from '@nestjs/core';
import { BearerTokenAuthGuard } from '../auth/by-bearer-token/bearer-token.guard';
import { DIContainer } from './core/di/contract/di-container';
import { ApplicationDIContainer } from './core/di/impl/application-di-container';
import { di } from './main';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: BearerTokenAuthGuard },
    { provide: DIContainer, useFactory: () => new ApplicationDIContainer(di) }
  ],
  exports: [DIContainer]
})
export class AppModule {}
