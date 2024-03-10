import { ClientID } from '../../vo/client-id';
import { ClientRDTO } from './dto/client.rdto';

export interface ClientRepository {
  get(id: ClientID): Promise<ClientRDTO | null>
}

export const ClientRepository = Symbol("ClientRepository");