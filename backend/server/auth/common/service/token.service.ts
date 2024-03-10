import { Result } from '../../../../domain/extensions/result';
import { AuthDto } from '../contract/auth-dto';
import * as process from 'process';
import { Hash } from 'crypto';
import { Hash as HashToken } from "../../common/core/di"
import { Inject } from '@nestjs/common';
import { Token } from '../vo/token';

export class TokenService {
  constructor(@Inject(HashToken) private readonly hasher: Hash) {}

  generateAccessToken(authDto: AuthDto): Result<Token> {
    this.hasher.update(`${authDto.authId}${authDto.password.value}${process.env.ACCESS_TOKEN_KEY}`)
    return Token.from(this.hasher.digest("hex"))
  }
}

