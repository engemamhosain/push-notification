import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { GpsNotificationDto } from './dto/gps-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createNotificationDto: CreateNotificationDto): string;
    gpsAlarm(gpsNotificationDto: GpsNotificationDto): Promise<string | object>;
}
