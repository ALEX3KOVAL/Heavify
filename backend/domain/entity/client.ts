import { Name } from '../vo/name';
import { Surname } from '../vo/surname';
import { Patronymic } from '../vo/patronymic';
import { ClientRDTO } from '../repository/client/dto/client.rdto';

export class Client {
  private constructor(
    private readonly name: Name,
    private readonly surname: Surname,
    private readonly patronymic: Patronymic | null,
    private readonly gender: number | null, // TODO VO для пола
    private readonly birthDate: Date
  ) {}

  static fromRdto = (rdto: ClientRDTO): Client => new Client(
    rdto.name,
    rdto.surname,
    rdto.patronymic,
    rdto.gender,
    rdto.birthDate
  )
}