import { Result } from '../extensions/result';

export class ClientID {
  private constructor(readonly value: number) {
    // TODO валидации
  }

  static from(value: number): Result<ClientID> {
    return Result.runCatching(() => new ClientID(value))
  }

  toString = (): string => `${this.value}`
}