import { Nickname } from '../../../../server/auth/common/vo/nickname';
import { Email } from '../../../../server/auth/common/vo/email';
import { Phone } from '../../../../server/auth/common/vo/phone';
import { Password } from '../../../../server/auth/common/vo/password';
import { ActivationLink } from '../../../../server/auth/common/vo/activation-link';
import { ClientAccountID } from '../../../vo/client-account-id';
import { ClientID } from '../../../vo/client-id';
import { Token } from '../../../../server/auth/common/vo/token';

export class ClientAccountRDTO {
  constructor(
    readonly id: ClientAccountID,
    readonly clientId: ClientID,
    readonly nickname: Nickname,
    readonly phone: Phone | null,
    readonly email: Email | null,
    readonly password: Password,
    readonly activationLink: ActivationLink,
    readonly accessToken: Token, // TODO возможно это нужно вынести в отдельное RDTO, чтобы эта инфа не светилась в домене
    readonly accessTokenExpiresIn: Date, // TODO возможно это нужно вынести в отдельное RDTO, чтобы эта инфа не светилась в домене
    readonly refreshToken: Token, // TODO возможно это нужно вынести в отдельное RDTO, чтобы эта инфа не светилась в домене
    readonly refreshTokenExpiresIn: Date, // TODO возможно это нужно вынести в отдельное RDTO, чтобы эта инфа не светилась в домене
    readonly isActive: boolean,
    readonly salt: string // TODO VO
  ) {}
}