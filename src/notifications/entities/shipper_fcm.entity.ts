import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('tb_shipper_fcm')
export class ShipperFcmEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  age: number;
}
