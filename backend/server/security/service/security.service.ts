import { Password } from '../../auth/common/vo/password';
import { Result } from '../../../domain/extensions/result';
import { Hash } from 'crypto';
import { Hash as HashToken } from "../../auth/common/core/di";
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SecurityService {
  constructor(@Inject(HashToken) private readonly hasher: Hash) {}

  generateHashedPasswordWithSalt(password: Password, salt: string): Result<Password> {
    const hashedPasswordPart: string = this.hasher.update(password.value).digest("hex")
    const hashedPassword: string = this.hasher.update(hashedPasswordPart + salt).digest("hex")
    return Password.from(hashedPassword)
  }
}