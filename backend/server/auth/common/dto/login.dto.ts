import { Password } from '../vo/password';
import { LoginID } from '../contract/login-id';
import { AuthDto } from '../contract/auth-dto';

/**
 * ДТО авторизации клиента
 *
 * @property id ID клиента
 * @property password Пароль
 */
export class LoginDto<T extends LoginID = LoginID> implements AuthDto {
  constructor(
    readonly id: T,
    readonly password: Password
  ) {}
}