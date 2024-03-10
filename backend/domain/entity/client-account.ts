import { ClientAccountID } from '../vo/client-account-id';
import { Nickname } from '../../server/auth/common/vo/nickname';
import { Phone } from '../../server/auth/common/vo/phone';
import { Email } from '../../server/auth/common/vo/email';
import { ClientID } from '../vo/client-id';
import { ActivationLink } from '../../server/auth/common/vo/activation-link';

export class ClientAccount {
  private readonly clientAccountId: ClientAccountID
  private readonly clientId: ClientID
  private readonly nickname: Nickname
  private readonly phone: Phone | null
  private readonly email: Email | null
  private readonly isActive: boolean
  private readonly activationLink: ActivationLink | null
}