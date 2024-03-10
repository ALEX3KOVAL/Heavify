import { Result } from '../../../../domain/extensions/result';
import { Phone } from '../vo/phone';
import { Email } from '../vo/email';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { DIContainer } from '../../../entry/core/di/contract/di-container';
import { RegisterID } from '../contract/register-id';
import { RegisterStrategy } from '../contract/register-strategy';
import { RegisterByPhone } from '../../by-phone/register/register-by-phone';
import { RegisterByEmail } from '../../by-email/register/register-by-email';

@Injectable()
export class RegisterStrategyFactory {
  constructor(
    @Inject(DIContainer) private readonly di: DIContainer
  ) {}

  create = (registerId: RegisterID): Result<RegisterStrategy> => Result.runCatching(() => {
    if (registerId instanceof Phone) {
      return this.di.get(RegisterByPhone).getOrThrow()
    }
    if (registerId instanceof Email) {
      return this.di.get(RegisterByEmail).getOrThrow()
    }
    throw new HttpException(
      'ID авторизации имеет неподдерживаемый тип', // todo надо написать пришедший тип
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  })
}