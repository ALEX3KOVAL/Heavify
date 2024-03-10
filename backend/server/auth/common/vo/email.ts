import { Result } from '../../../../domain/extensions/result';
import { LoginID } from '../contract/login-id';
import { RegisterID } from '../contract/register-id';

// TODO это доменное vo или данного модуля?
export class Email implements LoginID, RegisterID {
  private constructor(readonly value: string) {
    // TODO валидации
  }

  static from(value: string): Result<Email> {
    return Result.runCatching(() => new Email(value.trim()))
  }

  toString = (): string => this.value
}