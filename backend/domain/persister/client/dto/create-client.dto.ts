import { Name } from '../../../vo/name';
import { Surname } from '../../../vo/surname';
import { Patronymic } from '../../../vo/patronymic';
import { Nickname } from '../../../../server/auth/common/vo/nickname';
import { Email } from '../../../../server/auth/common/vo/email';
import { Password } from '../../../../server/auth/common/vo/password';
import { Phone } from '../../../../server/auth/common/vo/phone';
import { ActivationLink } from '../../../../server/auth/common/vo/activation-link';

export class CreateClientDto {
  constructor(
    readonly name: Name,
    readonly surname: Surname,
    readonly patronymic: Patronymic | null,
    readonly nickname: Nickname | null,
    readonly email: Email | null,
    readonly phone: Phone | null,
    readonly password: Password,
    readonly activationLink: ActivationLink,
    readonly isActive: boolean
  ) {}
}