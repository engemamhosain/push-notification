import { Injectable } from '@nestjs/common';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { Truck } from './entities/truck.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TruckService {
  constructor(
    @InjectRepository(Truck,process.env.TL_MASTER_DB_DATABASE)
      private trucksRepository: Repository<Truck>,
    ) { }

  create(createTruckDto: CreateTruckDto) {
    return 'This action adds a new truck';
  }

  findAll() {
    return `This action returns all truck`;
  }

  findOne(imeiId: number) {
    return this.trucksRepository.findOneBy({imei_id:imeiId});
  }

  update(id: number, updateTruckDto: UpdateTruckDto) {
    return `This action updates a #${id} truck`;
  }

  remove(id: number) {
    return `This action removes a #${id} truck`;
  }
}
