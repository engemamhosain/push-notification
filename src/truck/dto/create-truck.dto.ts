
import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTruckDto {
    @ApiProperty()
    @IsString()
    readonly truck_id: number;

    @ApiProperty()
    @IsInt()
    readonly truck_no: string;

    @ApiProperty()
    @IsInt()
    readonly imeiId: number;
    
  
 
}
