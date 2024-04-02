import {RuntimeException} from "@nestjs/core/errors/exceptions";
import {ErrorInfo, ServerException} from "../contract/server.exception";

export class AuthorizationException extends RuntimeException implements ServerException {
  readonly error: ErrorInfo

  constructor(m: string, code: number = 2) {
    super(m)
    this.error = new ErrorInfo(code, m)
  }
}