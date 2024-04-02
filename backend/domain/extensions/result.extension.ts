import { lazy } from "./lazy.extension";

export class Result<T> {

  private constructor(private readonly value: T) {}

  @lazy get isSuccess(): boolean {
    return !(this.value instanceof Failure)
  }

  @lazy get isFailure(): boolean {
    return this.value instanceof Failure || !this.value
  }

  private throwOnFailure(): void {
    if (this.value instanceof Failure) {
      throw this.value.exception
    }
  }

  getOrThrow(): T {
    this.throwOnFailure()
    return this.value as T
  }

  exceptionOrNull(): Error | null {
    if (this.value instanceof Failure) return this.value.exception
    return null
  }

  onSuccess(block: (value: T) => void): Result<T> {
    if (this.isSuccess) block(this.value)
    return this
  }

  onFailure(block: (exc: Error) => void): Result<T> {
    const exc = this.exceptionOrNull()
    if (exc) block(exc)
    return this
  }

  static runCatching<R>(block: () => R): Result<R> {
    try { return this.success(block()) }
    catch(exc: any) { return this.failure(exc) as Result<R> }
  }

  static async asyncRunCatching<R>(block: () => Promise<R>): Promise<Result<R>> {
    try {
      const value = await block();
      return this.success(value);
    } catch (exc) {
      return this.failure(exc as Error) as Result<R>;
    }
  }

  static success = <T>(value: T): Result<T> => new Result(value)

  static failure = <T>(exc: Error): Result<T> => new Result(new Failure(exc) as any)
}

class Failure <E extends Error> {
  readonly exception: E

  constructor(exception: E) {
    this.exception = exception
  }
}
