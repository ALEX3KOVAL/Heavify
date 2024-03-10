import { Password } from '../vo/password';
import { AuthID } from './auth-id';

export interface AuthDto {
  readonly authId: AuthID
  readonly password: Password
}