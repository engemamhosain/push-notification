import { Injectable,Inject, UnauthorizedException } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { GpsNotificationDto } from './dto/gps-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { OwnerFcmEntity } from './entities/owner_fcm.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TruckService } from 'src/truck/truck.service';
import { Truck } from 'src/truck/entities/truck.entity';
import axios from 'axios';
import { FcmDto } from './dto/fcm.dto';
import { InjectModel } from '@nestjs/mongoose';
import { NotificationDocument, pushnotification } from './schemas/push_notification.schema';
import {Model} from 'mongoose';
import { SOURCE } from 'utils/constants';

@Injectable()
export class NotificationsService {
  @Inject(TruckService)
  private readonly truckService: TruckService;


  constructor(
    @InjectRepository(OwnerFcmEntity,process.env.TL_MASTER_DB_DATABASE)
      private ownerFcmRepository: Repository<OwnerFcmEntity>,
      @InjectModel(pushnotification.name) private notificationModel: Model<NotificationDocument>,
  ) {}

  create(createNotificationDto: CreateNotificationDto) {
 
    return "Create"
  }

  async gpsAlarm(gpsNotificationDto: GpsNotificationDto) { 
     try {     
      if (gpsNotificationDto.apiKey!=process.env.TRUCKSOLID_API_KEY) {
        return new UnauthorizedException().getResponse()
      }

      let fcmDto= new FcmDto();
      let tokens=[];
      let truck = await this.truckService.findOne(gpsNotificationDto.imeiId); 
      let fcm= await this.ownerFcmRepository.findBy({owner_id:truck.owner_id});

      fcmDto.load(SOURCE[1],truck,gpsNotificationDto)
      
      fcm.forEach(element => {
        tokens.push(element.token)
      });         
      if(tokens.length>0){
        this.sendOwner(fcmDto,tokens)

      }
   
      this.analyticsLog(new pushnotification(SOURCE["1"],fcmDto))
      return {tl_status:200,message:"send"}

     } catch (error) {      
      return {tl_status:4001,message:"fail"}
     }
   
    
  
  }

async sendOwner(fcmDto:FcmDto,tokens:Array<string>) {  

  let data ={
    registration_ids: tokens,
    data :  fcmDto ,
    priority : "high"
  } 
  
    const response = await axios({
      method: 'POST',
      data:data,
      headers:{
        Authorization:process.env.OWNER_FCM_KEY,        
      },
      url: 'https://fcm.googleapis.com/fcm/send',
    }).catch((e) => {
      throw e
    });
                          
  return response
}

async analyticsLog(pushnotification: pushnotification){
  const createdNotification = new this.notificationModel(pushnotification);
  return createdNotification.save();
}


  findAll() {
    return this.notificationModel.find({"userId":"262142"}).exec();
  }

  findAllNotificationLog() {
    return this.notificationModel.findById({"_id": "63d64dcf81b8d71255da5789"}).exec();
  }


  findOne(id: number) {
    return this.ownerFcmRepository.findOneBy({
      id:id
    });
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
