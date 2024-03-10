import { DIContainer } from '../contract/di-container';
import { INestApplicationContext, Injectable, Type } from '@nestjs/common';
import { Result } from '../../../../../domain/extensions/result';

@Injectable()
export class ApplicationDIContainer implements DIContainer {
  constructor(private readonly di: INestApplicationContext) {}

  get = <T>(ctor: Type<T> | symbol): Result<T> => Result.runCatching(() => this.di.get<T>(ctor))

  has<T>(ctor: Type<T> | symbol): boolean {
    return false;
  }
}