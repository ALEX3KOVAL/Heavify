import {Injectable, UnauthorizedException} from '@nestjs/common';
import {LoginDto} from './common/dto/login.dto';
import {Result} from '../../domain/extensions/result.extension';
import {RegisterDTO} from './common/dto/register.dto';
import {LoginStrategyFactory} from './common/factory/login.strategy.factory';
import {ClientAccountRDTO} from '../../domain/repository/client/dto/client-account.rdto';
import {
    ClientAccountRepository,
    ClientAccountRepositoryToken,
} from '../../domain/repository/client/client-account.repository';
import {RegisterStrategyFactory} from './common/factory/register.strategy.factory';
import {LogoutDTO} from './common/dto/logout.dto';
import {Token} from './common/vo/token';
import {AuthID} from "./common/contract/auth-id";
import { randomBytes } from "crypto";
import {Password} from "./common/vo/password";
import {SecurityService} from "../security/service/security.service";
import {ClientService} from "../../domain/service/client.service";
import {ClientAccountService} from "../../domain/service/client-account.service";
import {CreateClientDTO} from "../../domain/persister/client/dto/create-client.dto";
import {CreateClientAccountDTO} from "../../domain/persister/client/dto/create-client-account.dto";
import {ModuleRef} from "@nestjs/core";
import {Phone} from "./common/vo/phone";
import {Email} from "./common/vo/email";
import {ClientID} from "../../domain/vo/client-id";

/**
 * Сервис авторизации клиента
 *
 * @property securityService Сервис крипто-защиты
 * @property clientService Сервис работы с сущностью "Клиент"
 * @property clientAccountService Сервис работы с сущностью "Аккаунт клиента"
 */
@Injectable()
export class AuthService {
    constructor(
        private readonly di: ModuleRef,
        private readonly securityService: SecurityService,
        private readonly clientService: ClientService,
        private readonly clientAccountService: ClientAccountService,
    ) {}

    register = (registerDto: RegisterDTO): Promise<Result<{ access_token: Token, auth_method: string }>> =>
        Result.asyncRunCatching(async () => {
            const clientAccount: ClientAccountRDTO | null = await this.di
                .get<ClientAccountRepository>(ClientAccountRepositoryToken)
                .getByNickname(registerDto.nickname)

            if (clientAccount) {
                throw new UnauthorizedException(`Пользователь с nickname "${registerDto.nickname}" уже зарегистрирован`)
            }

            const salt: string = randomBytes(25).toString("hex");
            const hashedPassword: Password = this.securityService
                .createHashedPasswordWithSalt(registerDto.password, salt)
                .getOrThrow();

            const clientId: ClientID = await this.clientService
                .add(this.toCreateClientDTO(registerDto))
                .getOrThrow(); // TODO транзакция
            await this.clientAccountService.add(
                this.toCreateClientAccountDTO(
                    registerDto,
                    hashedPassword,
                    false,
                    clientId,
                    salt
                )
            ).getOrThrow(); // TODO транзакция

            return this.di
                .get(RegisterStrategyFactory)
                .create(registerDto.id).getOrThrow()
                .register(registerDto)
                .getOrThrow();
        })

    private toCreateClientDTO = (registerDto: RegisterDTO): CreateClientDTO => {
        const now: Date = new Date()
        return new CreateClientDTO(
            registerDto.name,
            registerDto.surname,
            registerDto.patronymic,
            registerDto.gender,
            registerDto.birthDate,
            now,
            now
        )
    }

    private toCreateClientAccountDTO = (
        registerDto: RegisterDTO,
        password: Password,
        isActive: boolean,
        clientId: ClientID,
        salt: string
    ): CreateClientAccountDTO => {
        const now: Date = new Date()
        return new CreateClientAccountDTO(
            registerDto.nickname,
            registerDto.id instanceof Phone ? registerDto.id : null,
            registerDto.id instanceof Email ? registerDto.id : null,
            clientId,
            password,
            salt,
            isActive,
            now,
            now
        )
    }

    login = <T extends AuthID>(loginDto: LoginDto<T>): Promise<Result<{ access_token: Token, auth_method: string }>> =>
        this.di
            .get(LoginStrategyFactory)
            .create(loginDto.id).getOrThrow()
            .login(loginDto)

    logout = <T>(logoutDto: LogoutDTO): Result<Promise<void>> =>
        Result.runCatching(async (): Promise<void> => undefined)
}