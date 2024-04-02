import {ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClientAccountRDTO } from '../../../domain/repository/client/dto/client-account.rdto';
import { IVerifyOptions } from 'passport-http-bearer';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from '../common/core/decorator/public-route';

@Injectable()
export class BearerTokenAuthGuard extends AuthGuard("bearer") {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  handleRequest<T extends ClientAccountRDTO>(
    err: UnauthorizedException | null,
    user: T,
    _?: IVerifyOptions
  ): T {
    if (!err && user) {
      return user
    }

    throw err || new UnauthorizedException("Пользователь не авторизован")
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic: boolean = this.reflector
      .getAllAndOverride<boolean>(
          IS_PUBLIC_KEY,
          [context.getHandler(), context.getClass(),]
      );

    return isPublic ?? super.canActivate(context);
  }
}