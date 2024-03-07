import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('tb_owner_fcm')
export class OwnerFcmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  owner_id: number;

  @Column()
  token: string;

  @Column()
  create_date: Date;

  @Column()
  update_date: Date;
}
