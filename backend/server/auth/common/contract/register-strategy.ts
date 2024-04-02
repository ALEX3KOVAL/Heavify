import { Result } from '../../../../domain/extensions/result.extension';
import { RegisterDTO } from '../dto/register.dto';
import { RegisterID } from './register-id';
import { Token } from '../vo/token';

export interface RegisterStrategy<T extends RegisterID = RegisterID> {
  register(registerDto: RegisterDTO<T>): Result<{ access_token: Token, auth_method: string }> // TODO vo токена вместо object
}