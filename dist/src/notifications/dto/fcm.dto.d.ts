import { Truck } from 'src/truck/entities/truck.entity';
import { GpsNotificationDto } from './gps-notification.dto';
export declare class FcmDto {
    userId: string;
    title: string;
    message: string;
    intent: string;
    imeiId: string;
    push_notification: string;
    vibration: string;
    sound: string;
    redirect: string;
    url: string;
    sound_name: string;
    load(source: any, truck: Truck, gpsNotificationDto: GpsNotificationDto): void;
    set(tokens: Array<string>, source: string, type: string): void;
}
