import { TruckService } from './truck.service';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
export declare class TruckController {
    private readonly truckService;
    constructor(truckService: TruckService);
    create(createTruckDto: CreateTruckDto): string;
    findAll(): string;
    findOne(imeiId: string): Promise<import("./entities/truck.entity").Truck>;
    update(id: string, updateTruckDto: UpdateTruckDto): string;
    remove(id: string): string;
}
