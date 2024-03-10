import { ClientID } from '../../../vo/client-id';
import { Nickname } from '../../../../server/auth/common/vo/nickname';
import { Email } from '../../../../server/auth/common/vo/email';
import { Phone } from '../../../../server/auth/common/vo/phone';
import { Password } from '../../../../server/auth/common/vo/password';
import { Name } from '../../../vo/name';
import { Surname } from '../../../vo/surname';
import { Patronymic } from '../../../vo/patronymic';
import { ActivationLink } from '../../../../server/auth/common/vo/activation-link';

export class ClientRDTO {
  constructor(
    readonly id: ClientID,
    readonly name: Name,
    readonly surname: Surname,
    readonly patronymic: Patronymic | null,
    readonly gender: number, // TODO enum VO для пола
    readonly birthDate: Date
  ) {}
}