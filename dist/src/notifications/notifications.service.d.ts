/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateNotificationDto } from './dto/create-notification.dto';
import { GpsNotificationDto } from './dto/gps-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { OwnerFcmEntity } from './entities/owner_fcm.entity';
import { Repository } from 'typeorm';
import { FcmDto } from './dto/fcm.dto';
import { NotificationDocument, pushnotification } from './schemas/push_notification.schema';
import { Model } from 'mongoose';
export declare class NotificationsService {
    private ownerFcmRepository;
    private notificationModel;
    private readonly truckService;
    constructor(ownerFcmRepository: Repository<OwnerFcmEntity>, notificationModel: Model<NotificationDocument>);
    create(createNotificationDto: CreateNotificationDto): string;
    gpsAlarm(gpsNotificationDto: GpsNotificationDto): Promise<string | object>;
    sendOwner(fcmDto: FcmDto, tokens: Array<string>): Promise<import("axios").AxiosResponse<any, any>>;
    analyticsLog(pushnotification: pushnotification): Promise<import("mongoose").Document<unknown, any, pushnotification> & pushnotification & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, pushnotification> & pushnotification & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    findAllNotificationLog(): Promise<import("mongoose").Document<unknown, any, pushnotification> & pushnotification & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findOne(id: number): Promise<OwnerFcmEntity>;
    update(id: number, updateNotificationDto: UpdateNotificationDto): string;
    remove(id: number): string;
}
