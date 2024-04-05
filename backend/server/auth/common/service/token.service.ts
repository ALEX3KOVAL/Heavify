import { Result } from '../../../../domain/extensions/result.extension';
import { AuthDto } from '../contract/auth-dto';
import * as process from 'process';
import { Token } from '../vo/token';
import {createHash, Hash} from "crypto";
import {Injectable} from "@nestjs/common";
import {randomInt} from "crypto"

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

  generateOtp = (size: number): Result<Token> =>
      Result.runCatching(() => {
        const alphabet: string = "0123456789";
        const otp: string = [...Array<string>(size)]
            .reduce(
                (acc: string) => acc + alphabet[randomInt(alphabet.length)]
            )

        return Token.from(otp).getOrThrow()
      })
}

