import { Result } from '../../../../domain/extensions/result.extension';

export class Password {
  private constructor(readonly value: string) {
    // TODO валидации
  }

  static from(value: string): Result<Password> {
    return Result.runCatching(() => new Password(value.trim()))
  }
}