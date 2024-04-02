import { CreateClientAccountDTO } from './dto/create-client-account.dto';
import { ClientAccountID } from '../../vo/client-account-id';
import { Result } from '../../extensions/result.extension';
import {RegisterID} from "../../../server/auth/common/contract/register-id";

export interface ClientAccountPersister {
  add(dto: CreateClientAccountDTO): Result<Promise<ClientAccountID>>
}

export const ClientAccountPersisterToken = Symbol("ClientAccountPersister");