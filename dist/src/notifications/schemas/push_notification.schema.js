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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSchema = exports.pushnotification = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("../../../utils/constants");
const fcm_dto_1 = require("../dto/fcm.dto");
let pushnotification = class pushnotification {
    constructor(source, fcmDto) {
        switch (source) {
            case constants_1.SOURCE["1"]:
                this.userId = fcmDto.userId;
                this.appType = constants_1.SOURCE["1"];
                this.deviceType = "GpsDevice";
                this.notificationFor = fcmDto.message + " - " + fcmDto.intent;
                this.notificationType = "push";
                this.lat = "0";
                this.long = "0";
                this.createdOn = new Date().toISOString();
                break;
            default:
                break;
        }
    }
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "phoneNo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "notificationTime", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "appType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "deviceType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "notificationFor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "isChecked", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "notificationType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "lat", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "long", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], pushnotification.prototype, "createdOn", void 0);
pushnotification = __decorate([
    (0, mongoose_1.Schema)(),
    __metadata("design:paramtypes", [String, fcm_dto_1.FcmDto])
], pushnotification);
exports.pushnotification = pushnotification;
exports.NotificationSchema = mongoose_1.SchemaFactory.createForClass(pushnotification);
//# sourceMappingURL=push_notification.schema.js.map