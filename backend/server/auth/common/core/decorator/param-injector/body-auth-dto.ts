import { createParamDecorator, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { LoginDto } from '../../../dto/login.dto';
import { Nickname } from '../../../vo/nickname';
import { Phone } from '../../../vo/phone';
import { LoginID } from '../../../contract/login-id';
import { RegisterDto } from '../../../dto/register.dto';
import { Email } from '../../../vo/email';
import { Password } from '../../../vo/password';
import { RegisterID } from '../../../contract/register-id';
import { LogoutDTO } from '../../../dto/logout.dto';

// TODO реализовать нормально
export const BodyLoginDTO = createParamDecorator(
  (_: string, ctx: ExecutionContext): LoginDto<Nickname> => {
    const request = ctx.switchToHttp().getRequest();
    const loginParams = request.body;
    let authId: LoginID

    // TODO по регуляркам проверяем какой тип authID использовать

    return new LoginDto(
      Nickname.from(loginParams.nickname).getOrThrow(),
      Phone.from(loginParams.phone).getOrThrow()
    )
  },
)

export const BodyRegisterDTO = createParamDecorator(
  (_: string, ctx: ExecutionContext): RegisterDto => {
    const request = ctx.switchToHttp().getRequest();
    const registerParams = request.body;
    const authId: string = registerParams.authId

    return new RegisterDto(
      Nickname.from(registerParams.nickname).getOrThrow(),
      authId,
      Password.from(registerParams.password).getOrThrow()
    )
  }
)

export const BodyLogoutDTO = createParamDecorator(
  (_: string, ctx: ExecutionContext): LogoutDTO => {
    const request = ctx.switchToHttp().getRequest();
    const registerParams = request.body;

    return new LogoutDTO()
  }
)
