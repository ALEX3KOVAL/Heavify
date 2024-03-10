import { CreateClientDto } from './dto/create-client.dto';
import { Result } from '../../extensions/result';
import { ClientID } from '../../vo/client-id';

export interface ClientPersister {
  add(dto: CreateClientDto): Result<ClientID>
}

export const ClientPersister = Symbol("ClientPersister");