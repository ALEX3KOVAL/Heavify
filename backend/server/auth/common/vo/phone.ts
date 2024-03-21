import { Result } from '../../../../domain/extensions/result.extension';
import { LoginID } from '../contract/login-id';
import { RegisterID } from '../contract/register-id';
import {failIf} from "../../../../domain/extensions/call.extension";

// TODO это доменное vo или данного модуля?
export class Phone implements RegisterID, LoginID {
  private constructor(readonly value: string) {
    failIf(value.length === 0, "Телефон не может быть пустым")
    failIf(value.length !== 11, `Длина телефона должна быть 11 символов: ${value}`)
    failIf(7 !== parseInt(value[0]), `Некорректный код страны: ${value}`)
    failIf(9 !== parseInt(value[1]), `Некорректный DEF-префикс. Префикс должен начинаться с 9 :${value}`)
  }

  static from(value: string): Result<Phone> {
    return Result.runCatching(() => new Phone(value.trim()))
  }

  toString = (): string => this.value
}