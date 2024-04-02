import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn("increment")
  readonly id: number

  @Column({
    name: "name",
    type: 'varchar',
    length: 50
  })
  readonly name: string

  @Column({
    name: "surname",
    type: 'varchar',
    length: 60
  })
  readonly surname: string

  @Column({
    type: "varchar",
    length: 50,
    nullable: true
  })
  readonly patronymic: string | null

  @Column({
    type: "integer"
  })
  readonly gender: number

  @Column({
    name: "birth_date",
    type: "date"
  })
  readonly birthDate: Date

  @Column({
    name: "created_at",
    type: "timestamp"
  })
  readonly createdAt: Date

  @Column({
    name: "updated_at",
    type: "timestamp"
  })
  readonly updatedAt: Date
}