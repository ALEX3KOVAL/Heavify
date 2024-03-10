import { ClientAccountPersister } from '../../domain/persister/client/client-account.persister';
import { CreateClientAccountDTO } from '../../domain/persister/client/dto/create-client-account.dto';
import { ClientAccountID } from '../../domain/vo/client-account-id';
import { Result } from '../../domain/extensions/result';
import { DataSource, Repository } from 'typeorm';
import { ClientAccount } from '../entity/client-account';
import { Inject } from '@nestjs/common';

export class ClientAccountPersisterImpl extends Repository<ClientAccount> implements ClientAccountPersister {
  constructor(@Inject("DATA_SOURCE") dataSource: DataSource) {
    super(ClientAccount, dataSource.createEntityManager())
  }

  add(dto: CreateClientAccountDTO): Result<ClientAccountID> {
    return Result.runCatching(() => ClientAccountID.from(1).getOrThrow())
  }
}