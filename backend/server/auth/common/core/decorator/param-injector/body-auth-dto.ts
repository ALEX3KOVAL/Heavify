import {BadRequestException, createParamDecorator, ExecutionContext, HttpException, HttpStatus} from '@nestjs/common';
import { LoginDto } from '../../../dto/login.dto';
import { Nickname } from '../../../vo/nickname';
import { Phone } from '../../../vo/phone';
import { RegisterDTO } from '../../../dto/register.dto';
import { Email } from '../../../vo/email';
import { Password } from '../../../vo/password';
import { LogoutDTO } from '../../../dto/logout.dto';
import {Result} from "../../../../../../domain/extensions/result.extension";
import * as moment from 'moment';
import {Name} from "../../../../../../domain/vo/name";
import {Surname} from "../../../../../../domain/vo/surname";
import {Patronymic} from "../../../../../../domain/vo/patronymic";
import {RegisterID} from "../../../contract/register-id";

// TODO реализовать нормально
export const BodyLoginDTO = createParamDecorator(
  (_: string, ctx: ExecutionContext): LoginDto<Nickname> => {
    const request = ctx.switchToHttp().getRequest();
    const loginParams = request.body;
    const authIdParam: string = loginParams.authId;

    const emailResult: Result<Email> = Email.from(authIdParam);
    const phoneResult: Result<Phone> = Phone.from(authIdParam);
    if (phoneResult.isFailure && emailResult.isFailure) {
        throw new BadRequestException("Номер телефона или эл. почта указано неверно")
    }

    const authId: RegisterID = phoneResult.isSuccess ? phoneResult.getOrThrow() : emailResult.getOrThrow()

    return new LoginDto(
      Nickname.from(loginParams.nickname).getOrThrow(),
      Phone.from(loginParams.phone).getOrThrow()
    );
  },
)

export const BodyRegisterDTO = createParamDecorator(
  (_: string, ctx: ExecutionContext): RegisterDTO => {
    const request = ctx.switchToHttp().getRequest(); // TODO поискать способ как типизировать объект запроса
    const registerParams = request.body;
    const authIdParam: string = registerParams.authId;

    const nickname: Nickname = Nickname.from(registerParams.nickname).getOrThrow();
    const emailResult: Result<Email> = Email.from(authIdParam);
    const phoneResult: Result<Phone> = Phone.from(authIdParam);
    const name: Name = Name.from(registerParams.name).getOrThrow();
    const surname: Surname = Surname.from(registerParams.surname).getOrThrow();
    const patronymic: Patronymic | null = registerParams.patronymic ?
        Patronymic.from(registerParams.patronymic).getOrThrow()
        : null;
    const gender: number = parseInt(registerParams.gender);
    const birthDate: Date = moment(registerParams.birthDate, 'DD.MM.YYYY').toDate();
    const password: Password = Password.from(registerParams.password).getOrThrow()

    if (phoneResult.isFailure && emailResult.isFailure) {
        throw new BadRequestException("Номер телефона или эл. почта указано неверно")
    }

    const authId: RegisterID = phoneResult.isSuccess ? phoneResult.getOrThrow() : emailResult.getOrThrow()

    return new RegisterDTO(
        nickname,
        name,
        surname,
        patronymic,
        gender,
        birthDate,
        authId,
        password
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
