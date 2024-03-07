import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { TruckModule } from 'src/truck/truck.module';
import { NotificationsController } from './notifications.controller';
import { OwnerFcmEntity } from './entities/owner_fcm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationSchema, pushnotification } from './schemas/push_notification.schema';


@Module({
  imports: [ TruckModule,TypeOrmModule.forFeature([OwnerFcmEntity],process.env.TL_MASTER_DB_DATABASE),
  MongooseModule.forFeature([{ name: pushnotification.name, schema: NotificationSchema }])
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService]
})

export class NotificationsModule {}
