import { Result } from '../../../../domain/extensions/result';
import { NotFoundException } from '../../common/exception/not-found.exception';
import { Inject, Injectable } from '@nestjs/common';
import {
  ClientAccountRepository,
  ClientAccountRepositoryToken,
} from '../../../../domain/repository/client/client-account.repository';
import { ClientAccountRDTO } from '../../../../domain/repository/client/dto/client-account.rdto';
import { RegisterStrategy } from '../../common/contract/register-strategy';
import { RegisterDto } from '../../common/dto/register.dto';
import { Email } from '../../common/vo/email';
import { TokenService } from '../../common/service/token.service';
import { Token } from '../../common/vo/token';

@Injectable()
export class RegisterByEmail implements RegisterStrategy<Email> {
  constructor(
    @Inject(ClientAccountRepositoryToken)
    private readonly clientAccountRepository: ClientAccountRepository,
    private readonly tokenService: TokenService
  ) {}

  async register(registerDto: RegisterDto<Email>): Promise<Result<{ access_token: Token, auth_method: string }>> {
    const clientAccount: ClientAccountRDTO = await this.clientAccountRepository.getByEmail(registerDto.authId);

    return Result.runCatching(() => {
      if (clientAccount) {
        throw new NotFoundException(`Пользователь с эл. почтой ${registerDto.authId} не зарегистрирован`);
      }

      return {
        access_token: this.tokenService.generateAccessToken(registerDto).getOrThrow(),
        auth_method: "email" // TODO enum VO
      };
    });
  }
}