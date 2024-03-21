import { Result } from 'domain/extensions/result.extension';
import { LoginStrategy } from '../../common/contract/login-strategy';
import { LoginDto } from '../../common/dto/login.dto';
import { Email } from '../../common/vo/email';
import { NotFoundException } from '../../common/exception/not-found.exception';
import { Inject, Injectable } from '@nestjs/common';
import {
  ClientAccountRepository,
  ClientAccountRepositoryToken,
} from '../../../../domain/repository/client/client-account.repository';
import { ClientAccountRDTO } from '../../../../domain/repository/client/dto/client-account.rdto';
import { TokenService } from '../../common/service/token.service';
import { Token } from '../../common/vo/token';

@Injectable()
export class LoginByEmail implements LoginStrategy<Email> {
  constructor(
    @Inject(ClientAccountRepositoryToken)
    private readonly clientAccountRepository: ClientAccountRepository,
    private readonly tokenService: TokenService
  ) {}

  async login(loginDto: LoginDto<Email>): Promise<Result<{ access_token: Token, auth_method: string }>> {
    const clientAccount: ClientAccountRDTO | null = await this.clientAccountRepository.getByPhone(loginDto.authId)
    return Result.runCatching(() => {
      if (!clientAccount) throw new NotFoundException("Клиент с данной почтой не найден")

      return {
        access_token: this.tokenService
          .generateAccessToken(loginDto).getOrThrow(),
        auth_method: "phone" // TODO enum VO
      };
    })
  }
}