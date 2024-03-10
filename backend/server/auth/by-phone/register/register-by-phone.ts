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
import { Phone } from '../../common/vo/phone';
import { TokenService } from '../../common/service/token.service';
import { Token } from '../../common/vo/token';

@Injectable()
export class RegisterByPhone implements RegisterStrategy<Phone> {
  constructor(
    @Inject(ClientAccountRepositoryToken)
    private readonly clientAccountRepository: ClientAccountRepository,
    private readonly tokenService: TokenService
  ) {}

  async register(registerDto: RegisterDto<Phone>): Promise<Result<{ access_token: Token, auth_method: string }>> {
    const clientAccount: ClientAccountRDTO = await this.clientAccountRepository.getByPhone(registerDto.authId);

    return Result.runCatching((): { access_token: Token, auth_method: string } => {
      if (clientAccount) {
        throw new NotFoundException(`Пользователь с номером телефона ${registerDto.authId} не зарегистрирован`);
      }

      return {
        access_token: this.tokenService.generateAccessToken(registerDto).getOrThrow(),
        auth_method: "phone" // TODO enum VO
      };
    });
  }
}