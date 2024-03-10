import { Nickname } from '../../../server/auth/common/vo/nickname';
import { Email } from '../../../server/auth/common/vo/email';
import { Phone } from '../../../server/auth/common/vo/phone';
import { ClientAccountID } from '../../vo/client-account-id';
import { ClientAccountRDTO } from './dto/client-account.rdto';
import { Token } from '../../../server/auth/common/vo/token';

export interface ClientAccountRepository {
  get(id: ClientAccountID): Promise<ClientAccountRDTO | null>
  getByNickname(nickname: Nickname): Promise<ClientAccountRDTO | null>
  getByEmail(email: Email): Promise<ClientAccountRDTO | null>
  getByPhone(phone: Phone): Promise<ClientAccountRDTO | null>
  getByAccessToken(token: Token): Promise<ClientAccountRDTO | null>
}

export const ClientAccountRepositoryToken = Symbol("ClientAccountRepository");