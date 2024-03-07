"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsModule = void 0;
const common_1 = require("@nestjs/common");
const notifications_service_1 = require("./notifications.service");
const truck_module_1 = require("../truck/truck.module");
const notifications_controller_1 = require("./notifications.controller");
const owner_fcm_entity_1 = require("./entities/owner_fcm.entity");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const push_notification_schema_1 = require("./schemas/push_notification.schema");
let NotificationsModule = class NotificationsModule {
};
NotificationsModule = __decorate([
    (0, common_1.Module)({
        imports: [truck_module_1.TruckModule, typeorm_1.TypeOrmModule.forFeature([owner_fcm_entity_1.OwnerFcmEntity], process.env.TL_MASTER_DB_DATABASE),
            mongoose_1.MongooseModule.forFeature([{ name: push_notification_schema_1.pushnotification.name, schema: push_notification_schema_1.NotificationSchema }])
        ],
        controllers: [notifications_controller_1.NotificationsController],
        providers: [notifications_service_1.NotificationsService]
    })
], NotificationsModule);
exports.NotificationsModule = NotificationsModule;
//# sourceMappingURL=notifications.module.js.map