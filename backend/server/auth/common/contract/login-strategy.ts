import { Result } from '../../../../domain/extensions/result';
import { LoginDto } from '../dto/login.dto';
import { LoginID } from './login-id';
import { Token } from '../vo/token';

export interface LoginStrategy<T extends LoginID = LoginID> {
  login(loginDto: LoginDto<T>): Promise<Result<{ access_token: Token, auth_method: string }>> // TODO vo токена вместо object
}