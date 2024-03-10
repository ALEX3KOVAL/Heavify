import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './client';

@Entity()
export class ClientAccount {
  @PrimaryGeneratedColumn()
  readonly id: number

  @OneToOne(() => Client)
  readonly client: Client

  @Column({
    type: "varchar",
    length: 100,
    nullable: true,
    unique: true
  })
  readonly email: string | null

  @Column({
    type: "varchar",
    length: 14,
    nullable: true,
    unique: true
  })
  readonly phone: string | null

  @Column({
    type: "varchar",
    length: 50,
    unique: true
  })
  readonly nickname: string

  @Column({
    type: "varchar",
    length: 100,
    unique: true
  })
  readonly password: string

  @Column({
    name: "activation_link",
    type: "varchar",
    length: 255,
    unique: true
  })
  readonly activationLink: string | null;

  @Column({ type: 'boolean' })
  readonly isActive: boolean

  @Column({
    type: "varchar",
    length: 50,
    unique: true
  })
  readonly salt: string

  @Column({
    name: "access_token",
    type: "varchar",
    length: 255,
    unique: true
  })
  readonly accessToken: string

  @Column({
    name: "access_token_expires_in",
    type: "timestamp"
  })
  readonly accessTokenExpiresIn: Date

  @Column({
    name: "refresh_token",
    type: "varchar",
    length: 255,
    unique: true
  })
  readonly refreshToken: string

  @Column({
    name: "refresh_token_expires_in",
    type: "timestamp"
  })
  readonly refreshTokenExpiresIn: Date
}