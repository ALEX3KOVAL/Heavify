import {Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './common/dto/login.dto';
import { BodyLoginDTO, BodyLogoutDTO, BodyRegisterDTO } from './common/core/decorator/param-injector/body-auth-dto';
import { RegisterDTO } from './common/dto/register.dto';
import { LogoutDTO } from './common/dto/logout.dto';
import { PublicRoute } from './common/core/decorator/public-route';
import { Token } from './common/vo/token';

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
   */
  @Post("register")
  @PublicRoute()
  async register(@BodyRegisterDTO() registerDto: RegisterDTO): Promise<{ access_token: Token, auth_method: string }> {
    return await this.authService.register(registerDto).getOrThrow();
  }

  /**
   * Эндпоинт аутентификации клиента
   *
   * @param loginDto ДТО аутентификации клиента
   */
  @Post("login")
  @PublicRoute()
  async login(@BodyLoginDTO() loginDto: LoginDto): Promise<{ access_token: Token, auth_method: string }> {
    return await this.authService.login(loginDto).getOrThrow();
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