"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const owner_fcm_entity_1 = require("./entities/owner_fcm.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const truck_service_1 = require("../truck/truck.service");
const axios_1 = require("axios");
const fcm_dto_1 = require("./dto/fcm.dto");
const mongoose_1 = require("@nestjs/mongoose");
const push_notification_schema_1 = require("./schemas/push_notification.schema");
const mongoose_2 = require("mongoose");
const constants_1 = require("../../utils/constants");
let NotificationsService = class NotificationsService {
    constructor(ownerFcmRepository, notificationModel) {
        this.ownerFcmRepository = ownerFcmRepository;
        this.notificationModel = notificationModel;
    }
    create(createNotificationDto) {
        return "Create";
    }
    async gpsAlarm(gpsNotificationDto) {
        try {
            if (gpsNotificationDto.apiKey != process.env.TRUCKSOLID_API_KEY) {
                return new common_1.UnauthorizedException().getResponse();
            }
            let fcmDto = new fcm_dto_1.FcmDto();
            let tokens = [];
            let truck = await this.truckService.findOne(gpsNotificationDto.imeiId);
            let fcm = await this.ownerFcmRepository.findBy({ owner_id: truck.owner_id });
            fcmDto.load(constants_1.SOURCE[1], truck, gpsNotificationDto);
            fcm.forEach(element => {
                tokens.push(element.token);
            });
            if (tokens.length > 0) {
                this.sendOwner(fcmDto, tokens);
            }
            this.analyticsLog(new push_notification_schema_1.pushnotification(constants_1.SOURCE["1"], fcmDto));
            return { tl_status: 200, message: "send" };
        }
        catch (error) {
            return { tl_status: 4001, message: "fail" };
        }
    }
    async sendOwner(fcmDto, tokens) {
        let data = {
            registration_ids: tokens,
            data: fcmDto,
            priority: "high"
        };
        const response = await (0, axios_1.default)({
            method: 'POST',
            data: data,
            headers: {
                Authorization: process.env.OWNER_FCM_KEY,
            },
            url: 'https://fcm.googleapis.com/fcm/send',
        }).catch((e) => {
            throw e;
        });
        return response;
    }
    async analyticsLog(pushnotification) {
        const createdNotification = new this.notificationModel(pushnotification);
        return createdNotification.save();
    }
    findAll() {
        return this.notificationModel.find({ "userId": "262142" }).exec();
    }
    findAllNotificationLog() {
        return this.notificationModel.findById({ "_id": "63d64dcf81b8d71255da5789" }).exec();
    }
    findOne(id) {
        return this.ownerFcmRepository.findOneBy({
            id: id
        });
    }
    update(id, updateNotificationDto) {
        return `This action updates a #${id} notification`;
    }
    remove(id) {
        return `This action removes a #${id} notification`;
    }
};
__decorate([
    (0, common_1.Inject)(truck_service_1.TruckService),
    __metadata("design:type", truck_service_1.TruckService)
], NotificationsService.prototype, "truckService", void 0);
NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(owner_fcm_entity_1.OwnerFcmEntity, process.env.TL_MASTER_DB_DATABASE)),
    __param(1, (0, mongoose_1.InjectModel)(push_notification_schema_1.pushnotification.name)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        mongoose_2.Model])
], NotificationsService);
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map