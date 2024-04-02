import { Password } from '../../auth/common/vo/password';
import { Result } from '../../../domain/extensions/result.extension';
import {createHash, Hash} from 'crypto';
import { Injectable } from '@nestjs/common';

/**
 * Сервис крипто-защиты
 */
@Injectable()
export class SecurityService {
  createHashedPasswordWithSalt = (password: Password, salt: string): Result<Password> => Result.runCatching(() => {
    const rawPasswordHash: Hash = createHash("md5")
    const saltedPasswordHash: Hash = createHash("md5")
    const hashedPasswordPart: string = rawPasswordHash.update(password.value).digest("hex")
    const hashedPassword: string = saltedPasswordHash.update(hashedPasswordPart + salt).digest("hex")

    return Password.from(hashedPassword).getOrThrow()
  })

  comparePasswords = (clientPassword: Password, truePassword: Password, salt: string): Result<boolean> =>
      Result.runCatching(() => {
        const clientHashedPassword = this.createHashedPasswordWithSalt(clientPassword, salt).getOrThrow()
        return clientHashedPassword.value === truePassword.value
      })
}