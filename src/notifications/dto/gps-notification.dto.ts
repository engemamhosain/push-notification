import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GPS_ALARM_TYPE } from '../../../utils/constants';
export class GpsNotificationDto {
   
    @ApiProperty({
        type: String,
        description: `For Api key contact to support team`,
    })
    @IsString()
    @IsNotEmpty()
     apiKey: string;

    @ApiProperty({
        type: String,
        description: `Alarm type must be like this object values 

        
            ${JSON.stringify(GPS_ALARM_TYPE)}
        `,
    })
    @IsString()
    @IsNotEmpty()
     alermType: string;

    @ApiProperty()
    @IsString()
      alermMessage: string;

    @ApiProperty()
    @IsInt()
     protocolNumber: number;

    @ApiProperty()
    @IsNotEmpty()
    // @MinLength(1)
    @IsInt()
     imeiId: number;


 
}
