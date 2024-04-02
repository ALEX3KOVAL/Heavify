import { Name } from '../../../vo/name';
import { Surname } from '../../../vo/surname';
import { Patronymic } from '../../../vo/patronymic';
import {Nickname} from "../../../../server/auth/common/vo/nickname";

export class CreateClientDTO {
  constructor(
    readonly name: Name,
    readonly surname: Surname,
    readonly patronymic: Patronymic | null,
    readonly gender: number,
    readonly birthDate: Date,
    readonly createdAt: Date,
    readonly updatedAt: Date
  ) {}
}