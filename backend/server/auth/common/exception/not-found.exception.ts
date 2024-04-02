import {RuntimeException} from "@nestjs/core/errors/exceptions";
import {ErrorInfo, ServerException} from "../contract/server.exception";

export class NotFoundException extends RuntimeException implements ServerException {
  constructor(m: string, readonly error: ErrorInfo = new ErrorInfo(1, m)) { // TODO позже заедет enum с кодами
    super(m);
  }
}