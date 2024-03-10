import { Result } from '../../../../domain/extensions/result';

export class ActivationLink {
  private constructor(readonly value: string) {
    // TODO валидации
  }

  static from = (value: string): Result<ActivationLink> =>
    Result.runCatching(() => new ActivationLink(value.trim()))
}