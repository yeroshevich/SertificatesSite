"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const config_service_1 = tslib_1.__importDefault(require("@services/config.service"));
const auth_middleware_1 = tslib_1.__importDefault(require("@middlewares/auth.middleware"));
let ConfigController = class ConfigController {
    constructor() {
        this.configService = new config_service_1.default();
    }
    getConfigs(page) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.configService.findConfigByPage(page);
        });
    }
    updateConfig(config) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.configService.updateConfig(config);
        });
    }
    save(obj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.configService.setJSON(obj);
        });
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/configs/:page'),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('page')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ConfigController.prototype, "getConfigs", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Patch)('/configs'),
    (0, routing_controllers_1.UseBefore)(auth_middleware_1.default),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConfigController.prototype, "updateConfig", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/configs'),
    (0, routing_controllers_1.UseBefore)(auth_middleware_1.default),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConfigController.prototype, "save", null);
ConfigController = tslib_1.__decorate([
    (0, routing_controllers_1.Controller)()
], ConfigController);
exports.default = ConfigController;
//# sourceMappingURL=config.controller.js.map