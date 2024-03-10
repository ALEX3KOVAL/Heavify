import { Type } from '@nestjs/common';
import { Result } from '../../../../../domain/extensions/result';

export interface DIContainer {
  get<T>(ctor: Type<T> | symbol): Result<T>

  has<T>(ctor: Type<T> | symbol): boolean
}

export const DIContainer = Symbol("DIContainer")