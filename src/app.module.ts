import { Module } from '@nestjs/common';
import ormconfig = require('../config/ormconfig');


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TruckModule } from './truck/truck.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

 @Module({
  imports: [
    TypeOrmModule.forRoot(
      ormconfig[1]
      
      ), //other db
    NotificationsModule, TruckModule, AuthModule,
    MongooseModule.forRoot(process.env.ANALYTICS_MONGO_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}