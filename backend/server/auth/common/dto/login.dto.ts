import { Password } from '../vo/password';
import { LoginID } from '../contract/login-id';
import { AuthDto } from '../contract/auth-dto';

export class LoginDto<T extends LoginID = LoginID> implements AuthDto {
  constructor(
    readonly authId: T,
    readonly password: Password
  ) {}
}