import { Result } from '../../../../domain/extensions/result.extension';
import { LoginID } from '../contract/login-id';
import { RegisterID } from '../contract/register-id';
import {failIf} from "../../../../domain/extensions/call.extension";

// TODO это доменное vo или данного модуля?
export class Email implements LoginID, RegisterID {
  private constructor(readonly value: string) {
    failIf(value.length === 0, "E-mail не может быть пустой")
    failIf(
        /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(value),
        `Недопустимые символы в e-mail: ${value}`
    )
  }

  static from(value: string): Result<Email> {
    return Result.runCatching(() => new Email(value.trim()))
  }

  toString = (): string => this.value
}