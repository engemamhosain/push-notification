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
exports.FcmDto = void 0;
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../utils/constants");
const TYPE = ["Alarm"];
class FcmDto {
    constructor() {
        this.userId = "";
        this.title = "Welcome";
        this.message = "Welcome";
        this.intent = "0";
        this.imeiId = "0";
        this.push_notification = "default";
        this.vibration = "yes";
        this.sound = "yes";
        this.url = "NA";
        this.sound_name = "OS_Cancelled";
    }
    load(source, truck, gpsNotificationDto) {
        if (source == constants_1.SOURCE["1"]) {
            this.userId = "" + truck.owner_id;
            this.imeiId = "" + gpsNotificationDto.imeiId;
            this.intent = gpsNotificationDto.alermType;
            switch (gpsNotificationDto.alermType) {
                case constants_1.GPS_ALARM_TYPE.power_cut:
                    this.title = "ডিভাইস খোলা এলার্ট";
                    this.message = `ডিভাইস খোলা এলার্ট   ${truck.truck_no} এর জিপিএস ডিভাইসটি খুলে ফেলা হয়েছে`;
                    break;
                case constants_1.GPS_ALARM_TYPE.geofence_in:
                    this.title = "জিওফেন্স এলার্ট";
                    this.message = `জিওফেন্স এলার্ট  ${truck.truck_no} GEOFENCE  এ ঢুকেছে`;
                    break;
                case constants_1.GPS_ALARM_TYPE.geofence_out:
                    this.title = "জিওফেন্স এলার্ট";
                    this.message = `জিওফেন্স এলার্ট ${truck.truck_no} GEOFENCE থেকে বের হয়েছে`;
                    break;
                case constants_1.GPS_ALARM_TYPE.over_speed_alarm:
                    this.title = "ওভারস্পিড এলার্ট";
                    this.message = `ওভারস্পিড এলার্ট ${truck.truck_no} এর ওভারস্পিড হয়েছে`;
                    break;
                case constants_1.GPS_ALARM_TYPE.external_low_battery_alarm:
                    this.title = "লো ব্যাটারি এলার্ট";
                    this.message = `${truck.truck_no} এর  ব্যাটারিটি পরীক্ষা করুন`;
                    break;
                case constants_1.GPS_ALARM_TYPE.ACC_on_alarm:
                    this.title = "ইঞ্জিন চালু এলার্ট";
                    this.message = `ইঞ্জিন চালু এলার্ট ${truck.truck_no} এর ইঞ্জিন চালু করা হয়েছে `;
                    break;
                case constants_1.GPS_ALARM_TYPE.ACC_off_alarm:
                    this.title = "বন্ধ এলার্ট";
                    this.message = `বন্ধ এলার্ট ${truck.truck_no} এর ইঞ্জিন চালু করা হয়েছে `;
                    break;
                case constants_1.GPS_ALARM_TYPE.sos:
                    this.title = "ইমারজেন্সি এলার্ট ";
                    this.message = `ইমারজেন্সি এলার্ট ${truck.truck_no} এর ড্রাইভারের সাহায্যের প্রয়োজন`;
                    break;
                case constants_1.GPS_ALARM_TYPE.harsh_acceletation_alarm:
                    this.title = "বাজে ব্রেক/ এক্সেলারেশন এলার্ট ";
                    this.message = `হার্ডব্রেক/ এক্সেলারেশন এলার্ট ${truck.truck_no} এর বাজে ব্রেক/ এক্সেলারেশন হয়েছে`;
                    break;
                default:
                    this.title = "জিপিএস এলার্ট";
                    this.message = `জিপিএস এলার্ট`;
                    break;
            }
        }
    }
    set(tokens, source, type) {
        if (source == constants_1.SOURCE[0]) {
        }
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "intent", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "imeiId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "push_notification", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "vibration", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "sound", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "redirect", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FcmDto.prototype, "sound_name", void 0);
exports.FcmDto = FcmDto;
//# sourceMappingURL=fcm.dto.js.map