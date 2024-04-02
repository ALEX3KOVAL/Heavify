import { Result } from 'domain/extensions/result.extension';
import { LoginStrategy } from '../../common/contract/login-strategy';
import { LoginDto } from '../../common/dto/login.dto';
import { Phone } from '../../common/vo/phone';
import { NotFoundException } from '../../common/exception/not-found.exception';
import {Inject, Injectable, UnauthorizedException} from '@nestjs/common';
import {
  ClientAccountRepository,
  ClientAccountRepositoryToken,
} from '../../../../domain/repository/client/client-account.repository';
import { TokenService } from '../../common/service/token.service';
import { Token } from '../../common/vo/token';
import {ClientAccountRDTO} from "../../../../domain/repository/client/dto/client-account.rdto";
import {SecurityService} from "../../../security/service/security.service";
import {AuthorizationException} from "../../common/exception/authorization.exception";

/**
 * Авторизация клиента по номеру телефона
 *
 * @property clientAccountRepository Репозиторий аккаунтов клиентов
 * @property tokenService Сервис генерации токенов доступа
 * @property securityService Сервис крипто-защиты
 */
@Injectable()
export class LoginByPhone implements LoginStrategy {
  constructor(
    @Inject(ClientAccountRepositoryToken)
    private readonly clientAccountRepository: ClientAccountRepository,
    private readonly tokenService: TokenService,
    private readonly securityService: SecurityService
  ) {}

  /**
   * Авторизовать клиента
   *
   * @param loginDto ДТО авторизации клиента
   */
  login = (loginDto: LoginDto<Phone>): Promise<Result<{ access_token: Token, auth_method: string }>> =>
    Result.asyncRunCatching(async () => {
      const clientAccount: ClientAccountRDTO | null = await this.clientAccountRepository.getByPhone(loginDto.id);

      if (!clientAccount) throw new NotFoundException(`Пользователь с номером телефона "${loginDto.id}" не зарегистрирован`);

      const passwordsAreIdentical: boolean = this.securityService
        .comparePasswords(loginDto.password, clientAccount.password, clientAccount.salt)
        .getOrThrow()

      if (!passwordsAreIdentical) {
        throw new AuthorizationException("Неверный пароль")
      }

      return {
        access_token: this.tokenService.generateAccessToken(loginDto).getOrThrow(),
        auth_method: "phone"
      };
    });
}