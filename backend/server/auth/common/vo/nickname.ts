import { Result } from '../../../../domain/extensions/result';
import { LoginID } from '../contract/login-id';

export class Nickname implements LoginID {
  private constructor(readonly value: string) {
    // TODO валидации
  }

  static from(value: string): Result<Nickname> {
    return Result.runCatching(() => new Nickname(value.trim()))
  }

  toString = (): string => this.value
}