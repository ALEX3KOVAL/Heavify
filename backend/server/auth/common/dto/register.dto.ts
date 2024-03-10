import { Password } from '../vo/password';
import { Nickname } from '../vo/nickname';
import { RegisterID } from '../contract/register-id';
import { AuthDto } from '../contract/auth-dto';

export class RegisterDto<T extends RegisterID = RegisterID> implements AuthDto {
  constructor(
    readonly nickname: Nickname,
    readonly authId: T,
    readonly password: Password
  ) {}
}