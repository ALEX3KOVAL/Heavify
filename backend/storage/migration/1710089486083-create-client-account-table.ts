import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClientAccountTable1710089486083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.createTable(
          new Table({
              name: "client_account",
              comment: "Аккаунт клиента",
              columns: [
                  {
                      name: "id",
                      type: "integer",
                      isPrimary: true,
                      generationStrategy: "increment"
                  },
                  {
                      name: "email",
                      type: "varchar",
                      length: "100",
                      isUnique: true,
                      isNullable: true,
                      comment: "Электронная почта клиента"
                  },
                  {
                      name: "phone",
                      type: "varchar",
                      length: "14",
                      isUnique: true,
                      isNullable: true,
                      comment: "Номер телефона клиента"
                  },
                  {
                      name: "nickname",
                      type: "varchar",
                      length: "50",
                      isUnique: true,
                      comment: "Уникальное имя клиента в системе"
                  },
                  {
                      name: "password",
                      type: "varchar",
                      length: "100",
                      isUnique: true,
                      comment: "Пароль к аккаунту клиента"
                  },
                  {
                      name: "activation_link",
                      type: "varchar",
                      length: "255",
                      isUnique: true,
                      isNullable: true,
                      comment: "Ссылка активации аккаунта"
                  },
                  {
                      name: "is_active",
                      type: "boolean",
                      comment: "Активен ли аккаунт клиента"
                  },
                  {
                      name: "salt",
                      type: "varchar",
                      length: "50",
                      isUnique: true,
                      comment: "Соль для данных аутентификации"
                  },
                  {
                      name: "access_token",
                      type: "varchar",
                      length: "255",
                      isUnique: true,
                      isNullable: true,
                      comment: "Токен доступа"
                  },
                  {
                      name: "access_token_expires_in",
                      type: "timestamp",
                      isNullable: true,
                      comment: "Время просрочки токена доступа"
                  },
                  {
                      name: "refresh_token",
                      type: "varchar",
                      length: "255",
                      isUnique: true,
                      isNullable: true,
                      comment: "Обновляющий токен"
                  },
                  {
                      name: "refresh_token_expires_in",
                      type: "timestamp",
                      isNullable: true,
                      comment: "Время просрочки обновляющего токена"
                  },
                  {
                      name: "created_at",
                      type: "timestamp"
                  },
                  {
                      name: "updated_at",
                      type: "timestamp"
                  }
              ]
          }),
          true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
