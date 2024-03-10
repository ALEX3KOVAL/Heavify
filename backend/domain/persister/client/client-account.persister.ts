import { CreateClientAccountDTO } from './dto/create-client-account.dto';
import { ClientAccountID } from '../../vo/client-account-id';
import { Result } from '../../extensions/result';

export interface ClientAccountPersister {
  add(dto: CreateClientAccountDTO): Result<ClientAccountID>
}

export const ClientAccountPersisterToken = Symbol("ClientAccountPersister");