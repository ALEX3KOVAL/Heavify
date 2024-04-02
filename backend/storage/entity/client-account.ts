import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, RelationId, TableForeignKey} from 'typeorm';
import { Client } from './client';

@Entity()
export class ClientAccount {
  @PrimaryGeneratedColumn("increment")
  readonly id: number

  @OneToOne(() => Client)
  @JoinColumn({referencedColumnName: "id", name: "client_id"})
  readonly client: Client;

  @Column({ name: "client_id", type: "integer" })
  @RelationId((clientAccount: ClientAccount) => clientAccount.client)
  clientId: number;

  @Column({
    type: "varchar",
    length: 100,
    nullable: true,
    unique: true
  })
  readonly email: string | null;

  @Column({
    type: "varchar",
    length: 14,
    nullable: true,
    unique: true
  })
  readonly phone: string | null;

  @Column({
    type: "varchar",
    length: 50,
    unique: true
  })
  readonly nickname: string;

  @Column({
    type: "varchar",
    length: 100,
    unique: true
  })
  readonly password: string;

  @Column({
    name: "activation_link",
    type: "varchar",
    length: 255,
    unique: true
  })
  readonly activationLink: string | null;

  @Column({ name: "is_active", type: 'boolean' })
  readonly isActive: boolean;

  @Column({
    type: "varchar",
    length: 50,
    unique: true
  })
  readonly salt: string;

  @Column({
    name: "access_token",
    type: "varchar",
    length: 255,
    nullable: true,
    unique: true
  })
  readonly accessToken: string | null;

  @Column({
    name: "access_token_expires_in",
    type: "timestamp",
    nullable: true
  })
  readonly accessTokenExpiresIn: Date | null;

  @Column({
    name: "refresh_token",
    type: "varchar",
    length: 255,
    unique: true,
    nullable: true
  })
  readonly refreshToken: string | null;

  @Column({
    name: "refresh_token_expires_in",
    type: "timestamp",
    nullable: true
  })
  readonly refreshTokenExpiresIn: Date | null;

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