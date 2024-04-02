import { CreateClientDTO } from './dto/create-client.dto';
import { Result } from '../../extensions/result.extension';
import { ClientID } from '../../vo/client-id';

export interface ClientPersister {
  add(dto: CreateClientDTO): Result<Promise<ClientID>>
}

export const ClientPersisterToken = Symbol("ClientPersister");