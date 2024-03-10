import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthorizationException } from '../common/exception/authorization.exception';
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
    err: AuthorizationException | null,
    user: T,
    _?: IVerifyOptions
  ): T {
    if (!err && user) {
      return user
    }

    throw err || new AuthorizationException("Пользователь не авторизован")
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic: boolean = this.reflector
      .getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }
}