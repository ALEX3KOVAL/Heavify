import {ClientPersister, ClientPersisterToken} from "../persister/client/client.persister";
import {Inject, Injectable} from "@nestjs/common";
import {Result} from "../extensions/result.extension";
import {ClientID} from "../vo/client-id";
import {CreateClientDTO} from "../persister/client/dto/create-client.dto";

@Injectable()
export class ClientService {
    constructor(
        @Inject(ClientPersisterToken)
        private readonly clientPersister: ClientPersister
    ) {}

    add = (dto: CreateClientDTO): Result<Promise<ClientID>> => this.clientPersister.add(dto)
}