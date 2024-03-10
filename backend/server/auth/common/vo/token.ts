import { Result } from '../../../../domain/extensions/result';

export class Token {
  private constructor(readonly value: string) {
    // TODO валидации
  }

  static from = (value: string): Result<Token> =>
    Result.runCatching(() => new Token(value.trim()))
}