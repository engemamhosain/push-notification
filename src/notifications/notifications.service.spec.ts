import { Test, TestingModule } from '@nestjs/testing';
import { GpsNotificationDto } from './dto/gps-notification.dto';
import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsService],
    }).compile();

    service = module.get<NotificationsService>(NotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('gpsAlarm', () => {
    
    // {
    //   "apiKey": "Y-4lYYkfWQkd0m@KSIarg0zCMEzOoNsKbGN8-93$A",
    //   "alermType": "power_cut",
    //   "alermMessage": "string",
    //   "protocolNumber": 0,
    //   "imeiId": 9170448515
    // }
    let gpsNotificationDto= new GpsNotificationDto();
    gpsNotificationDto.imeiId=100;    
    gpsNotificationDto.alermType="";
    
    service.gpsAlarm(gpsNotificationDto)
    expect(service).toBeDefined();
  });
});
