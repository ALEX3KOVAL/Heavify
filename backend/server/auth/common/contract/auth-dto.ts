import { Password } from '../vo/password';
import { AuthID } from './auth-id';

export interface AuthDto {
  readonly id: AuthID
  readonly password: Password
}