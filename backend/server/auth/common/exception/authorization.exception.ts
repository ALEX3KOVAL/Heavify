import {RuntimeException} from "@nestjs/core/errors/exceptions";
import {ErrorInfo, ServerException} from "../contract/server.exception";

export class AuthorizationException extends RuntimeException implements ServerException {
  constructor(m: string, readonly error: ErrorInfo = new ErrorInfo(2, m)) {
    super(m)
  }
}