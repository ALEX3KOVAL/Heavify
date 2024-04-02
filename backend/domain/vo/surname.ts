import { Result } from '../extensions/result.extension';

export class Surname {
  private constructor(readonly value: string) {
    // TODO валидации
  }

  static from(value: string): Result<Surname> {
    return Result.runCatching(() => new Surname(value.trim()))
  }

  toString = (): string => this.value
}