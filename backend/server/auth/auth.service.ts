import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from './common/dto/login.dto';
import { Result } from '../../domain/extensions/result';
import { DIContainer } from '../entry/core/di/contract/di-container';
import { RegisterDto } from './common/dto/register.dto';
import { AuthorizationException } from './common/exception/authorization.exception';
import { LoginStrategyFactory } from './common/factory/login.strategy.factory';
import { ClientAccountRDTO } from '../../domain/repository/client/dto/client-account.rdto';
import {
  ClientAccountRepository,
  ClientAccountRepositoryToken,
} from '../../domain/repository/client/client-account.repository';
import { RegisterStrategyFactory } from './common/factory/register.strategy.factory';
import { LogoutDTO } from './common/dto/logout.dto';
import { Token } from './common/vo/token';

@Injectable()
export class AuthService {
  constructor(@Inject(DIContainer) private readonly di: DIContainer) {}

  register = (registerDto: RegisterDto): Result<Promise<{ access_token: Token, auth_method: string }>> =>
    Result.runCatching(async (): Promise<{ access_token: Token, auth_method: string }> => {
      const clientAccount: ClientAccountRDTO = await this.di
        .get<ClientAccountRepository>(ClientAccountRepositoryToken).getOrThrow()
        .getByNickname(registerDto.nickname)

      if (clientAccount) {
        throw new AuthorizationException(`Пользователь с nickname "${registerDto.nickname}" уже зарегистрирован`)
      }

      return (
        await this.di
          .get(RegisterStrategyFactory).getOrThrow()
          .create(registerDto.authId).getOrThrow()
          .register(registerDto)
      ).getOrThrow()
    })

  login = <T>(loginDto: LoginDto<T>): Result<Promise<{ access_token: Token, auth_method: string }>> =>
    Result.runCatching(async (): Promise<{ access_token: Token, auth_method: string }> =>
      (
        await this.di
          .get(LoginStrategyFactory).getOrThrow()
          .create(loginDto.authId).getOrThrow()
          .login(loginDto)
      ).getOrThrow(),
    );

  logout = <T>(logoutDto: LogoutDTO): Result<Promise<void>> =>
    Result.runCatching(async (): Promise<void> => undefined)
}