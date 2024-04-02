import { Result } from '../../../../domain/extensions/result.extension';
import { Phone } from '../vo/phone';
import { Email } from '../vo/email';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterID } from '../contract/register-id';
import { RegisterStrategy } from '../contract/register-strategy';
import { RegisterByPhone } from '../../by-phone/register/register-by-phone';
import { RegisterByEmail } from '../../by-email/register/register-by-email';
import {ModuleRef} from "@nestjs/core";

@Injectable()
export class RegisterStrategyFactory {
  constructor(
    private readonly di: ModuleRef
  ) {}

  create = (registerId: RegisterID): Result<RegisterStrategy> => Result.runCatching(() => {
    if (registerId instanceof Phone) {
      return this.di.get(RegisterByPhone)
    }
    if (registerId instanceof Email) {
      return this.di.get(RegisterByEmail)
    }
    throw new HttpException(
      `ID авторизации имеет неподдерживаемый тип: ${typeof registerId}`, // todo надо написать пришедший тип
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  })
}