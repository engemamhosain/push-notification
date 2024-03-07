
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('trucks_info')
export class Truck {
  @PrimaryGeneratedColumn()
  truck_id: number;

  @Column()
  truck_no: string;

  @Column()
  owner_id: number;

  @Column()
  imei_id: number;
}
