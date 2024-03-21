import { Nickname } from '../../../../server/auth/common/vo/nickname';
import {Password} from "../../../../server/auth/common/vo/password";
import {Phone} from "../../../../server/auth/common/vo/phone";
import {Email} from "../../../../server/auth/common/vo/email";
import {ClientID} from "../../../vo/client-id";

export class CreateClientAccountDTO {
  constructor(
    readonly nickname: Nickname,
    readonly phone: Phone | null,
    readonly email: Email | null,
    readonly clientId: ClientID,
    readonly password: Password,
    readonly salt: string, // TODO VO для соли
    readonly isActive: Boolean,
    readonly createdAt: Date,
    readonly updatedAt: Date
  ) {}
}