import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SecurityService } from '../security/service/security.service';
import { DatabaseModule } from '../database/database.module';
import { AppModule } from '../entry/app.module';
import { BearerTokenStrategy } from './by-bearer-token/bearer-token.strategy';
import { ClientAccountRepositoryToken } from '../../domain/repository/client/client-account.repository';
import { ClientAccountRepositoryImpl } from '../../storage/repository/client-account.repository.impl';
import { ClientAccountPersisterToken } from '../../domain/persister/client/client-account.persister';
import { ClientAccountPersisterImpl } from '../../storage/persister/client-account.persister.impl';
import {ClientService} from "../../domain/service/client.service";
import {ClientAccountService} from "../../domain/service/client-account.service";
import {ClientPersisterToken} from "../../domain/persister/client/client.persister";
import {ClientPersisterImpl} from "../../storage/persister/client.persister.impl";
import {RegisterStrategyFactory} from "./common/factory/register.strategy.factory";
import {RegisterByEmail} from "./by-email/register/register-by-email";
import {RegisterByPhone} from "./by-phone/register/register-by-phone";
import {TokenService} from "./common/service/token.service";

@Module({
  providers: [
    {
      provide: ClientAccountPersisterToken,
      useClass: ClientAccountPersisterImpl
    },
    {
      provide: ClientPersisterToken,
      useClass: ClientPersisterImpl
    },
    AuthService,
    SecurityService,
    BearerTokenStrategy,
    RegisterStrategyFactory,
    ClientService,
    ClientAccountService,
    RegisterByEmail,
    TokenService,
    RegisterByPhone
  ],
  controllers: [AuthController],
  exports: [AuthService],
  imports: [
    DatabaseModule,
    forwardRef(() => AppModule)
  ]
})
export class AuthModule {}