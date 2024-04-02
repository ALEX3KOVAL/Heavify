import {Controller, HttpCode, Post, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './common/dto/login.dto';
import { BodyLoginDTO, BodyLogoutDTO, BodyRegisterDTO } from './common/core/decorator/param-injector/body-auth-dto';
import { RegisterDTO } from './common/dto/register.dto';
import { LogoutDTO } from './common/dto/logout.dto';
import { PublicRoute } from './common/core/decorator/public-route';
import { Token } from './common/vo/token';
import {Response} from "express"

/**
 * Эндпоинты регистрации, аутентификации и деавторизации клиента
 */
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Эндпоинт регистрации клиента
   *
   * @param registerDto ДТО регистрации
   * @param response Объект http-ответа
   */
  @Post("register")
  @PublicRoute()
  async register(@BodyRegisterDTO() registerDto: RegisterDTO, @Res() response: Response) {
    (await this.authService.register(registerDto))
        .onSuccess(res =>
            response.send(new Success(res.access_token, res.auth_method))
        )
        .onFailure(exc => response.send(exc))
  }

  /**
   * Эндпоинт аутентификации клиента
   *
   * @param loginDto ДТО аутентификации клиента
   * @param response Объект http-ответа
   */
  @Post("login")
  @HttpCode(200)
  @PublicRoute()
  async login(@BodyLoginDTO() loginDto: LoginDto, @Res() response: Response) {
    (await this.authService.login(loginDto))
          .onSuccess((res) =>
            response.send(new Success(res.access_token, res.auth_method))
          )
          .onFailure(exc => response.send(exc))
  }

  /**
   * Эндпоинт деавторизации клиента
   * @param logoutDto
   */
  @Post("logout")
  async logout(@BodyLogoutDTO() logoutDto: LogoutDTO): Promise<void> {
    return await this.authService.logout(logoutDto).getOrThrow();
  }
}

class Success {
  constructor(
    readonly accessToken: Token,
    readonly auth_method: string,
  ) {}
}