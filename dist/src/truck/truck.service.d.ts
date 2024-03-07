import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { Truck } from './entities/truck.entity';
import { Repository } from 'typeorm';
export declare class TruckService {
    private trucksRepository;
    constructor(trucksRepository: Repository<Truck>);
    create(createTruckDto: CreateTruckDto): string;
    findAll(): string;
    findOne(imeiId: number): Promise<Truck>;
    update(id: number, updateTruckDto: UpdateTruckDto): string;
    remove(id: number): string;
}
