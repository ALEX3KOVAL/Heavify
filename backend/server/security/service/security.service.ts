import { Password } from '../../auth/common/vo/password';
import { Result } from '../../../domain/extensions/result.extension';
import {createHash, Hash} from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SecurityService {
  generateHashedPasswordWithSalt(password: Password, salt: string): Result<Password> {
    const rawPasswordHash: Hash = createHash("md5")
    const saltedPasswordHash: Hash = createHash("md5")
    const hashedPasswordPart: string = rawPasswordHash.update(password.value).digest("hex")
    const hashedPassword: string = saltedPasswordHash.update(hashedPasswordPart + salt).digest("hex")
    return Password.from(hashedPassword)
  }
}