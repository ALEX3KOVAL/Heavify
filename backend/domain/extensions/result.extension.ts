import { lazy } from "./lazy.extension";

export class Result<out T> {
  private readonly value: T | null

  private constructor(value: T) {
    this.value = value
  }

  @lazy get isSuccess(): boolean {
    return !(this.value instanceof Result.Failure)
  }

  @lazy get isFailure(): boolean {
    return this.value instanceof Result.Failure || !this.value
  }

  private throwOnFailure(): void {
    if (this.value instanceof Result.Failure) {
      throw this.value.exception
    }
  }

  getOrThrow(): T {
    this.throwOnFailure()
    return this.value as T
  }

  private static Failure = class Failure <E extends Error> {
    readonly exception: E

    constructor(exception: E) {
      this.exception = exception
    }
  }

  static runCatching<R>(block: () => R): Result<R> {
    try { return this.success(block()) }
    catch(exc: any) { return new Result(new Result.Failure<Error>(exc) as R) }
  }

  static success = <T>(value: T): Result<T> => new Result(value)
}

export {};