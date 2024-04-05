import {randomUUID} from "crypto"
import { Result } from '../../../../domain/extensions/result.extension';
import { Injectable } from '@nestjs/common';
import { RegisterStrategy } from '../../common/contract/register-strategy';
import { RegisterDTO } from '../../common/dto/register.dto';
import { Email } from '../../common/vo/email';
import { TokenService } from '../../common/service/token.service';
import { Token } from '../../common/vo/token';
import {EmailingService} from "../../../emailing/emailing.service";

@Injectable()
export class RegisterByEmail implements RegisterStrategy<Email> {
  constructor(
    private readonly tokenService: TokenService,
    private readonly emailingService: EmailingService
  ) {}

  register = (registerDto: RegisterDTO<Email>): Promise<Result<{ access_token: Token, auth_method: string }>> =>
  Result.asyncRunCatching(async () => {
      const activationLink: string = randomUUID();

      this.emailingService
          .sendActivationMail(
              registerDto.id,
              activationLink
          )
          .then()

      return {
        access_token: this.tokenService.generateAccessToken(registerDto).getOrThrow(),
        auth_method: "email" // TODO enum VO
      };
    })
}