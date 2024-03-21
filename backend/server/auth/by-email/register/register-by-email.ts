import { Result } from '../../../../domain/extensions/result.extension';
import { Injectable } from '@nestjs/common';
import { RegisterStrategy } from '../../common/contract/register-strategy';
import { RegisterDTO } from '../../common/dto/register.dto';
import { Email } from '../../common/vo/email';
import { TokenService } from '../../common/service/token.service';
import { Token } from '../../common/vo/token';

@Injectable()
export class RegisterByEmail implements RegisterStrategy<Email> {
  constructor(
    private readonly tokenService: TokenService
  ) {}

  register = (registerDto: RegisterDTO<Email>): Result<{ access_token: Token, auth_method: string }> =>
  Result.runCatching(() => {
      return {
        access_token: this.tokenService.generateAccessToken(registerDto).getOrThrow(),
        auth_method: "email" // TODO enum VO
      };
    })
}