import { PassportStrategy } from '@nestjs/passport';
import { IVerifyOptions, Strategy } from 'passport-http-bearer';
import { Inject, Injectable } from '@nestjs/common';
import {
  ClientAccountRepository,
  ClientAccountRepositoryToken,
} from '../../../domain/repository/client/client-account.repository';
import { Token } from '../common/vo/token';
import { ClientAccountRDTO } from '../../../domain/repository/client/dto/client-account.rdto';
import { AuthorizationException } from '../common/exception/authorization.exception';

@Injectable()
export class BearerTokenStrategy extends PassportStrategy(Strategy, "bearer") {
  constructor(
    @Inject(ClientAccountRepositoryToken)
      clientAccountRepository: ClientAccountRepository,
  ) {
    super(
      (
        token: string,
        cbk: (error: any, user: ClientAccountRDTO | null, options?: IVerifyOptions | string) => void,
      ): void => {
        clientAccountRepository
          .getByAccessToken(Token.from(token).getOrThrow())
          .then((clientAccount: ClientAccountRDTO | null) => {
            if (!clientAccount) {
              return cbk(new AuthorizationException("Пользователь не найден"), null, { message: "Токен доступа не найден", scope: "*" })
            }
            if (clientAccount.accessTokenExpiresIn.valueOf() > Date.now()) {
              return cbk(new AuthorizationException("Токен доступа просрочен"), null, { message: "Токен доступа более не актуален", scope: "*" })
            }

            return cbk(null, clientAccount)
          })
      },
    );
  }
}