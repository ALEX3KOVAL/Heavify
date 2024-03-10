import { RuntimeException } from '@nestjs/core/errors/exceptions';
import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthorizationException extends HttpException {
  constructor(m: string) {
    super(m, HttpStatus.UNAUTHORIZED);
  }
}