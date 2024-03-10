import { LoginStrategy } from '../../common/contract/login-strategy';
import { LoginDto } from '../../common/dto/login.dto';
import { Result } from '../../../../domain/extensions/result';
import { NotFoundException } from '../../common/exception/not-found.exception';
import { Inject, Injectable } from '@nestjs/common';
import {
  ClientAccountRepository,
  ClientAccountRepositoryToken,
} from '../../../../domain/repository/client/client-account.repository';
import { Nickname } from '../../common/vo/nickname';
import { ClientAccountRDTO } from '../../../../domain/repository/client/dto/client-account.rdto';
import { TokenService } from '../../common/service/token.service';
import { Token } from '../../common/vo/token';

@Injectable()
export class LoginByNickname implements LoginStrategy {
  constructor(
    @Inject(ClientAccountRepositoryToken)
    private readonly clientAccountRepository: ClientAccountRepository,
    private readonly tokenService: TokenService
  ) {}

  async login(loginDto: LoginDto<Nickname>): Promise<Result<{ access_token: Token, auth_method: string }>> {
    const clientAccount: ClientAccountRDTO = await this.clientAccountRepository.getByPhone(loginDto.authId);

    return Result.runCatching((): { access_token: Token, auth_method: string } => {
      if (!clientAccount) {
        throw new NotFoundException(`Пользователь с номером телефона ${loginDto.authId} не зарегистрирован`);
      }

      return {
        access_token: this.tokenService.generateAccessToken(loginDto).getOrThrow(),
        auth_method: "nickname" // TODO enum VO
      };
    });
  }
}