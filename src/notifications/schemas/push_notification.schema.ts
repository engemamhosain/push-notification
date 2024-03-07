import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument ,Model} from 'mongoose';
import { SOURCE } from 'utils/constants';
import { FcmDto } from '../dto/fcm.dto';

export type NotificationDocument = HydratedDocument<pushnotification>;

@Schema()
export class pushnotification {
  @Prop()
  userId: string;

  @Prop()
  phoneNo: string;

  @Prop()
  notificationTime: string;
  @Prop()
  appType: string;
  @Prop()
  deviceType: string;
  @Prop()
  notificationFor: string;
  @Prop()
  isChecked: string;
  @Prop()
  notificationType: string;
  @Prop()
  lat: string;
  @Prop()
  long: string;
  @Prop()
  source: string;
  @Prop()
  createdOn: string;

  constructor(source:String,fcmDto:FcmDto){
 
    switch (source) {
      
      case SOURCE["1"]:
        this.userId=fcmDto.userId
        this.appType=SOURCE["1"]
        this.deviceType="GpsDevice"
        this.notificationFor=fcmDto.message+" - "+fcmDto.intent
        this.notificationType="push"
        this.lat="0"
        this.long="0"
        this.createdOn=new Date().toISOString()
        break;
    
      default:
        break;
    }
  }
}

export const NotificationSchema = SchemaFactory.createForClass(pushnotification);