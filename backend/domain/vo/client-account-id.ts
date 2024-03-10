import { Result } from '../extensions/result';

// TODO это доменное vo или всё же server?
export class ClientAccountID {
  private constructor(readonly value: number) {
    // TODO валидации
  }

  static from(value: number): Result<ClientAccountID> {
    return Result.runCatching(() => new ClientAccountID(value))
  }

  toString = (): string => `${this.value}`
}