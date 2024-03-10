import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClientTable1710089783575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.createTable(
          new Table({
              name: "client",
              comment: "Клиент",
              columns: [
                  {
                      name: "id",
                      type: "integer",
                      isPrimary: true,
                      generationStrategy: "increment"
                  },
                  {
                      name: "name",
                      type: "varchar",
                      length: "50",
                      comment: "Имя клиента"
                  },
                  {
                      name: "surname",
                      type: "varchar",
                      length: "60",
                      comment: "Фамилия клиента"
                  },
                  {
                      name: "patronymic",
                      type: "varchar",
                      length: "50",
                      isNullable: true,
                      comment: "Отчество клиента"
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
