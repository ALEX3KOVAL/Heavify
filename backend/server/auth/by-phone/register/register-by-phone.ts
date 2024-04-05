import { Result } from '../../../../domain/extensions/result.extension';
import { Injectable } from '@nestjs/common';
import { RegisterStrategy } from '../../common/contract/register-strategy';
import { RegisterDTO } from '../../common/dto/register.dto';
import { Phone } from '../../common/vo/phone';
import { TokenService } from '../../common/service/token.service';
import { Token } from '../../common/vo/token';

/**
 * Регистрация по номеру телефона
 *
 * @property tokenService Сервис генерации токенов
 */
@Injectable()
export class RegisterByPhone implements RegisterStrategy<Phone> {
  constructor(
    private readonly tokenService: TokenService
  ) {}

  register = (registerDto: RegisterDTO<Phone>): Promise<Result<{ access_token: Token, auth_method: string }>> =>
    Result.asyncRunCatching(async ()  => {
        const otp: Token = this.tokenService
            .generateOtp(6)
            .getOrThrow()

        // todo отправка sms на номер телефона
      return {
        access_token: this.tokenService.generateAccessToken(registerDto).getOrThrow(),
        auth_method: "phone" // TODO enum VO
      };
    });
}