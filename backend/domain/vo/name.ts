import { Result } from '../extensions/result.extension';

export class Name {
  private constructor(readonly value: string) {
    // TODO валидации
  }

  static from(value: string): Result<Name> {
    return Result.runCatching(() => new Name(value.trim()))
  }

  toString = (): string => this.value
}