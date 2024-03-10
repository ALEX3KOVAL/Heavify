import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Hash } from './common/core/di';
import { createHash } from 'crypto';
import { SecurityService } from '../security/service/security.service';
import { DatabaseModule } from '../database/database.module';
import { AppModule } from '../entry/app.module';
import { BearerTokenStrategy } from './by-bearer-token/bearer-token.strategy';
import { ClientAccountRepositoryToken } from '../../domain/repository/client/client-account.repository';
import { ClientAccountRepositoryImpl } from '../../storage/repository/client-account.repository.impl';
import { ClientAccountPersisterToken } from '../../domain/persister/client/client-account.persister';
import { ClientAccountPersisterImpl } from '../../storage/persister/client-account.persister.impl';

@Module({
  providers: [
    {
      provide: ClientAccountPersisterToken,
      useClass: ClientAccountPersisterImpl
    },
    {
      provide: ClientAccountRepositoryToken,
      useClass: ClientAccountRepositoryImpl
    },
    {
      provide: Hash,
      useFactory: () => createHash("md5")
    },
    AuthService,
    SecurityService,
    BearerTokenStrategy
  ],
  controllers: [AuthController],
  exports: [AuthService],
  imports: [
    DatabaseModule,
    forwardRef(() => AppModule)
  ]
})
export class AuthModule {}