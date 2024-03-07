import { IsArray, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GPS_ALARM_TYPE, SOURCE } from 'utils/constants';
import { Truck } from 'src/truck/entities/truck.entity';
import { GpsNotificationDto } from './gps-notification.dto';


const TYPE=["Alarm"]
export class FcmDto {
    
    // @IsArray()
    // tokens: Array<string>=[];
    @IsString()
    userId:string="";

    @IsString()
     title:string="Welcome";

     @IsString()
     message:string="Welcome";

     @IsString()
     intent:string="0";

    @IsString()
     imeiId:string="0";

     @IsString()
     push_notification:string="default";

    @IsString()
     vibration:string="yes";

    @IsString()
     sound:string="yes";

    @IsString()
     redirect:string;

    @IsString()
     url:string="NA";

    @IsString()
     sound_name:string="OS_Cancelled";

 
    load(source:any,truck:Truck,gpsNotificationDto:GpsNotificationDto){
        if(source==SOURCE["1"]){
            this.userId=""+truck.owner_id;
            this.imeiId=""+gpsNotificationDto.imeiId;
            this.intent=gpsNotificationDto.alermType;
            switch (gpsNotificationDto.alermType) {
                case GPS_ALARM_TYPE.power_cut:
                    this.title="ডিভাইস খোলা এলার্ট"
                    this.message=`ডিভাইস খোলা এলার্ট   ${truck.truck_no} এর জিপিএস ডিভাইসটি খুলে ফেলা হয়েছে`
                    break;

                    
                case GPS_ALARM_TYPE.geofence_in:
                    this.title="জিওফেন্স এলার্ট"
                    this.message=`জিওফেন্স এলার্ট  ${truck.truck_no} GEOFENCE  এ ঢুকেছে`
                    break;

                case GPS_ALARM_TYPE.geofence_out:
                    this.title="জিওফেন্স এলার্ট"
                    this.message=`জিওফেন্স এলার্ট ${truck.truck_no} GEOFENCE থেকে বের হয়েছে`
                    break; 
                    
                case GPS_ALARM_TYPE.over_speed_alarm:
                    this.title="ওভারস্পিড এলার্ট"
                    this.message=`ওভারস্পিড এলার্ট ${truck.truck_no} এর ওভারস্পিড হয়েছে`
                    break;

                case GPS_ALARM_TYPE.external_low_battery_alarm:
                    this.title="লো ব্যাটারি এলার্ট"
                    this.message=`${truck.truck_no} এর  ব্যাটারিটি পরীক্ষা করুন`
                    break;

       
                case GPS_ALARM_TYPE.ACC_on_alarm:
                    this.title="ইঞ্জিন চালু এলার্ট"
                    this.message=`ইঞ্জিন চালু এলার্ট ${truck.truck_no} এর ইঞ্জিন চালু করা হয়েছে `
                    break;
                case GPS_ALARM_TYPE.ACC_off_alarm:
                    this.title="বন্ধ এলার্ট"
                    this.message=`বন্ধ এলার্ট ${truck.truck_no} এর ইঞ্জিন চালু করা হয়েছে `
                    break;
                case GPS_ALARM_TYPE.sos:
                    this.title="ইমারজেন্সি এলার্ট "
                    this.message=`ইমারজেন্সি এলার্ট ${truck.truck_no} এর ড্রাইভারের সাহায্যের প্রয়োজন`
                    break;
                case GPS_ALARM_TYPE.harsh_acceletation_alarm:
                    this.title="বাজে ব্রেক/ এক্সেলারেশন এলার্ট "
                    this.message=`হার্ডব্রেক/ এক্সেলারেশন এলার্ট ${truck.truck_no} এর বাজে ব্রেক/ এক্সেলারেশন হয়েছে`
                    break;
                                
                default:                    
                    this.title="জিপিএস এলার্ট"
                    this.message=`জিপিএস এলার্ট`
                    break;
                    
            }
            
        }
      
    }
 
    set(tokens:Array<string>,source:string ,type:string){      
        if(source==SOURCE[0]){

        }

    }

 
}
