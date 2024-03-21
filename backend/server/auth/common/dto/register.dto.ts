import { Password } from '../vo/password';
import { Nickname } from '../vo/nickname';
import { RegisterID } from '../contract/register-id';
import { AuthDto } from '../contract/auth-dto';
import {Surname} from "../../../../domain/vo/surname";
import {Name} from "../../../../domain/vo/name";
import {Patronymic} from "../../../../domain/vo/patronymic";

export class RegisterDTO<T extends RegisterID = RegisterID> implements AuthDto {
  constructor(
    readonly nickname: Nickname,
    readonly name: Name,
    readonly surname: Surname,
    readonly patronymic: Patronymic | null,
    readonly gender: number,
    readonly birthDate: Date,
    readonly authId: T,
    readonly password: Password
  ) {}
}