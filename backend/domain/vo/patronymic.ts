import { Result } from '../extensions/result.extension';

export class Patronymic {
  private constructor(readonly value: string) {
    // TODO валидации
  }

  static from(value: string): Result<Patronymic> {
    return Result.runCatching(() => new Patronymic(value))
  }

  toString = (): string => this.value
}