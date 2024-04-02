import { Result } from '../../../../domain/extensions/result.extension';
import { AuthDto } from '../contract/auth-dto';
import * as process from 'process';
import { Token } from '../vo/token';
import {createHash, Hash} from "crypto";
import {Injectable} from "@nestjs/common";

/**
 * Сервис генерации токенов доступа
 */
@Injectable()
export class TokenService {
  generateAccessToken(authDto: AuthDto): Result<Token> {
    const hash: Hash = createHash("md5")
    hash.update(`${authDto.id}${authDto.password.value}${process.env.ACCESS_TOKEN_KEY}`)
    return Token.from(hash.digest("hex"))
  }
}

