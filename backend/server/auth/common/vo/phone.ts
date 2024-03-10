import { Result } from '../../../../domain/extensions/result';
import { LoginID } from '../contract/login-id';
import { RegisterID } from '../contract/register-id';

// TODO это доменное vo или данного модуля?
export class Phone implements RegisterID, LoginID {
  private constructor(readonly value: string) {
    // TODO валидации
  }

  static from(value: string): Result<Phone> {
    return Result.runCatching(() => new Phone(value.trim()))
  }

  toString = (): string => this.value
}