import {ClientAccountPersister} from '../../domain/persister/client/client-account.persister';
import {CreateClientAccountDTO} from '../../domain/persister/client/dto/create-client-account.dto';
import {ClientAccountID} from '../../domain/vo/client-account-id';
import {Result} from '../../domain/extensions/result.extension';
import {DataSource, DeepPartial, Repository} from 'typeorm';
import {ClientAccount} from '../entity/client-account';
import {Inject} from '@nestjs/common';
import {Client} from "../entity/client";
import {ClientID} from "../../domain/vo/client-id";
import {Nickname} from "../../server/auth/common/vo/nickname";
import {Phone} from "../../server/auth/common/vo/phone";
import {Email} from "../../server/auth/common/vo/email";
import {Password} from "../../server/auth/common/vo/password";

export class ClientAccountPersisterImpl extends Repository<ClientAccount> implements ClientAccountPersister {
    constructor(@Inject("DATA_SOURCE") dataSource: DataSource) {
        super(ClientAccount, dataSource.createEntityManager())
    }

    add = (dto: CreateClientAccountDTO): Result<Promise<ClientAccountID>> => Result.runCatching(async () => {
        const clientAccount: ClientAccount = this.manager.create<ClientAccount, object>(
            ClientAccount,
            { // TODO типизировать, чтобы можно было использовать только поля из таблицы, а не рандомные
                nickname: dto.nickname.value,
                phone: dto.phone?.value,
                email: dto.email?.value,
                password: dto.password.value,
                clientId: dto.clientId.value,
                salt: dto.salt, // TODO VO для соли
                isActive: dto.isActive,
                createdAt: dto.createdAt,
                updatedAt: dto.updatedAt
            }
        );
        await this.manager.save(clientAccount);
        return ClientID.from(clientAccount.id).getOrThrow()
    })
}