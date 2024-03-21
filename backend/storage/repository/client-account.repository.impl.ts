import { ClientAccountRepository } from '../../domain/repository/client/client-account.repository';
import { ClientAccountID } from '../../domain/vo/client-account-id';
import { Email } from '../../server/auth/common/vo/email';
import { Nickname } from '../../server/auth/common/vo/nickname';
import { ClientAccountRDTO } from '../../domain/repository/client/dto/client-account.rdto';
import { Phone } from '../../server/auth/common/vo/phone';
import { Password } from '../../server/auth/common/vo/password';
import { ActivationLink } from '../../server/auth/common/vo/activation-link';
import { DataSource, Repository } from 'typeorm';
import { ClientAccount } from '../entity/client-account';
import { ClientID } from '../../domain/vo/client-id';
import { Token } from '../../server/auth/common/vo/token';
import {Inject} from '@nestjs/common';

export class ClientAccountRepositoryImpl extends Repository<ClientAccount> implements ClientAccountRepository {
  private readonly repository: Repository<ClientAccount>;

  constructor(@Inject("DATA_SOURCE") dataSource: DataSource) {
    super(ClientAccount, dataSource.createEntityManager());

    this.repository = dataSource.getRepository(ClientAccount);
  }

  async get(id: ClientAccountID): Promise<ClientAccountRDTO | null> {
    const clientAccount: ClientAccount | null = await this.repository.findOneBy({id: id.value});
    console.log(clientAccount?.client)
    return this.toRdto(clientAccount)
  }

  async getByNickname(nickname: Nickname): Promise<ClientAccountRDTO | null> {
    const clientAccount: ClientAccount | null = await this.repository.findOneBy({nickname: nickname.value});
    return this.toRdto(clientAccount)
  }

  async getByEmail(email: Email): Promise<ClientAccountRDTO | null> {
    const clientAccount: ClientAccount | null = await this.repository.findOneBy({email: email.value});
    return this.toRdto(clientAccount);
  }

  async getByPhone(phone: Phone): Promise<ClientAccountRDTO | null> {
    const clientAccount: ClientAccount | null = await this.repository.findOneBy({phone: phone.value});
    return this.toRdto(clientAccount)
  }

  async getByAccessToken(token: Token): Promise<ClientAccountRDTO | null> {
    const clientAccount: ClientAccount | null = await this.repository.findOneBy({accessToken: token.value})
    return this.toRdto(clientAccount)
  }

  private toRdto = (entity: ClientAccount | null): ClientAccountRDTO | null =>
      entity ?
          new ClientAccountRDTO(
              ClientAccountID.from(entity.id).getOrThrow(),
              ClientID.from(entity.clientId).getOrThrow(),
              Nickname.from(entity.nickname).getOrThrow(),
              entity.email ? Email.from(entity.email).getOrThrow() : null,
              entity.phone ? Phone.from(entity.phone).getOrThrow() : null,
              Password.from(entity.password).getOrThrow(),
              entity.activationLink ? ActivationLink.from(entity.activationLink).getOrThrow() : null,
              entity.accessToken ? Token.from(entity.accessToken).getOrThrow() : null,
              entity.accessTokenExpiresIn,
              entity.refreshToken ? Token.from(entity.refreshToken).getOrThrow() : null,
              entity.refreshTokenExpiresIn,
              entity.isActive,
              entity.salt
          )
          : null
}