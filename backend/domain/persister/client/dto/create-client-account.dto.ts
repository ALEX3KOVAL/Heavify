import { Nickname } from '../../../../server/auth/common/vo/nickname';

export class CreateClientAccountDTO {
  constructor(
    private readonly nickname: Nickname
  ) {}
}