import {Inject} from "@nestjs/common";
import {ClientAccountPersister, ClientAccountPersisterToken} from "../persister/client/client-account.persister";
import {CreateClientAccountDTO} from "../persister/client/dto/create-client-account.dto";
import {Result} from "../extensions/result.extension";
import {ClientAccountID} from "../vo/client-account-id";
import {RegisterID} from "../../server/auth/common/contract/register-id";

export class ClientAccountService {
    constructor(
        @Inject(ClientAccountPersisterToken)
        private readonly clientAccountPersister: ClientAccountPersister
    ) {}

    add = (dto: CreateClientAccountDTO): Result<Promise<ClientAccountID>> => this.clientAccountPersister.add(dto)
}