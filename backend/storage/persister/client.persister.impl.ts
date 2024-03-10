import { ClientPersister } from '../../domain/persister/client/client.persister';
import { CreateClientDto } from '../../domain/persister/client/dto/create-client.dto';
import { Result } from '../../domain/extensions/result';
import { ClientID } from '../../domain/vo/client-id';
import { Client } from '../entity/client';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientPersisterImpl extends Repository<Client> implements ClientPersister {
  constructor(private readonly dataSource: DataSource)
  {
    super(Client, dataSource.createEntityManager());
  }

  add = (dto: CreateClientDto): Result<ClientID> =>
    ClientID.from(
      this.manager.create<Client, object>(
        Client,
        {
          nickname: dto.nickname.value,
          email: dto.email.value,
          phone: dto.phone.value,
          password: dto.password.value,
          name: dto.name.value,
          surname: dto.surname.value,
          patronymic: dto.patronymic.value,
          isActive: dto.isActive,
          activationLink: dto.activationLink.value
        }
    ).id)
}