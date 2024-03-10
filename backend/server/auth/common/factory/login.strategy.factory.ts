import { LoginID } from '../contract/login-id';
import { Result } from '../../../../domain/extensions/result';
import { Phone } from '../vo/phone';
import { LoginByPhone } from '../../by-phone/login/login-by-phone';
import { Email } from '../vo/email';
import { LoginByEmail } from '../../by-email/login/login-by-email';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { DIContainer } from '../../../entry/core/di/contract/di-container';
import { Nickname } from '../vo/nickname';
import { LoginStrategy } from '../contract/login-strategy';
import { LoginByNickname } from '../../by-nickname/login/login-by-nickname';

@Injectable()
export class LoginStrategyFactory {
  constructor(@Inject(DIContainer) private readonly di: DIContainer) {}

  create = (loginId: LoginID): Result<LoginStrategy> => Result.runCatching(() => {
    if (loginId instanceof Phone) {
      return this.di.get(LoginByPhone).getOrThrow()
    }
    if (loginId instanceof Email) {
      return this.di.get(LoginByEmail).getOrThrow()
    }
    if (loginId instanceof Nickname) {
      return this.di.get(LoginByNickname).getOrThrow()
    }
    throw new HttpException(
      'ID авторизации имеет неподдерживаемый тип', // todo надо как-то написать пришедший тип
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  })
}