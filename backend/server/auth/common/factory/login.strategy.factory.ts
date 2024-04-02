import { LoginID } from '../contract/login-id';
import { Result } from '../../../../domain/extensions/result.extension';
import { Phone } from '../vo/phone';
import { LoginByPhone } from '../../by-phone/login/login-by-phone';
import { Email } from '../vo/email';
import { LoginByEmail } from '../../by-email/login/login-by-email';
import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { Nickname } from '../vo/nickname';
import { LoginStrategy } from '../contract/login-strategy';
import { LoginByNickname } from '../../by-nickname/login/login-by-nickname';
import {ModuleRef} from "@nestjs/core";

@Injectable()
export class LoginStrategyFactory {
  constructor(private readonly di: ModuleRef) {}

  create = (loginId: LoginID): Result<LoginStrategy> => Result.runCatching(() => {
    if (loginId instanceof Phone) {
      return this.di.get(LoginByPhone)
    }
    if (loginId instanceof Email) {
      return this.di.get(LoginByEmail)
    }
    if (loginId instanceof Nickname) {
      return this.di.get(LoginByNickname)
    }
    throw new HttpException(
      'ID авторизации имеет неподдерживаемый тип', // todo надо как-то написать пришедший тип
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  })
}