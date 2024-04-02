import { ClientPersister } from '../../domain/persister/client/client.persister';
import { CreateClientDTO } from '../../domain/persister/client/dto/create-client.dto';
import { Result } from '../../domain/extensions/result.extension';
import { ClientID } from '../../domain/vo/client-id';
import { Client } from '../entity/client';
import { DataSource, Repository } from 'typeorm';
import {Inject, Injectable} from '@nestjs/common';

@Injectable()
export class ClientPersisterImpl extends Repository<Client> implements ClientPersister {
  constructor(@Inject("DATA_SOURCE") dataSource: DataSource)
  {
    super(Client, dataSource.createEntityManager());
  }

  add = (dto: CreateClientDTO): Result<Promise<ClientID>> => Result.runCatching(async () => {
      const client: Client = this.manager.create<Client, object>(
          Client,
          {
              name: dto.name.value,
              surname: dto.surname.value,
              patronymic: dto.patronymic?.value,
              gender: dto.gender,
              birthDate: dto.birthDate,
              createdAt: dto.createdAt,
              updatedAt: dto.updatedAt
          }
      )
      await this.manager.save(client)
      return ClientID.from(client.id).getOrThrow()
  })
}