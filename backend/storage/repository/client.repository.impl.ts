import { ClientRepository } from '../../domain/repository/client/client.repository';
import { ClientID } from '../../domain/vo/client-id';
import { ClientRDTO } from '../../domain/repository/client/dto/client.rdto';
import { DataSource, Repository } from 'typeorm';
import { Client } from '../entity/client';
import { Name } from '../../domain/vo/name';
import { Surname } from '../../domain/vo/surname';
import { Patronymic } from '../../domain/vo/patronymic';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ClientRepositoryImpl extends Repository<Client> implements ClientRepository {
  private readonly repository: Repository<Client>;

  constructor(@Inject("DATA_SOURCE") dataSource: DataSource)
  {
    super(Client, dataSource.createEntityManager());
    this.repository = dataSource.getRepository(Client)
  }

  async get(id: ClientID): Promise<ClientRDTO | null> {
    const client: Client = await this.repository.findOneBy({ id: id.value });
    return this.toRdto(client)
  }

  private toRdto = (entity: Client): ClientRDTO =>
    new ClientRDTO(
      ClientID.from(entity.id).getOrThrow(),
      Name.from(entity.name).getOrThrow(),
      Surname.from(entity.surname).getOrThrow(),
      entity.patronymic ? Patronymic.from(entity.patronymic).getOrThrow() : null,
      entity.gender,
      entity.birthDate
    )
}