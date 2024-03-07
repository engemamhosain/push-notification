import { Module } from '@nestjs/common';
import { TruckService } from './truck.service';
import { TruckController } from './truck.controller';
import { Truck } from './entities/truck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Truck],process.env.TL_MASTER_DB_DATABASE)],
  controllers: [TruckController],
  providers: [TruckService],
  exports:[TruckService]
})
export class TruckModule {}
