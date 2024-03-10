import { Result } from '../../../../domain/extensions/result';
import { RegisterDto } from '../dto/register.dto';
import { RegisterID } from './register-id';
import { Token } from '../vo/token';

export interface RegisterStrategy<T extends RegisterID = RegisterID> {
  register(registerDto: RegisterDto<T>): Promise<Result<{ access_token: Token, auth_method: string }>> // TODO vo токена вместо object
}