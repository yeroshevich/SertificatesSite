"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_1 = require("@database/sequelize");
const HttpException_1 = require("@exceptions/HttpException");
const util_1 = require("@utils/util");
class ConfigService {
    findConfigByPage(page) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(page))
                throw new HttpException_1.HttpException(500, 'page title is empty');
            const findedPage = yield sequelize_1.ConfigPage.findOne({
                where: {
                    title: page
                }, raw: true
            });
            if (!findedPage)
                throw new HttpException_1.HttpException(404, 'page is not found');
            const config = yield sequelize_1.ConfigModel.findOne({
                where: {
                    pageId: findedPage.idPage
                }, raw: true
            });
            if (!config)
                throw new HttpException_1.HttpException(404, 'config not found');
            return JSON.parse(JSON.stringify(config.config));
        });
    }
    updateConfig(config) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findedConfig = yield sequelize_1.ConfigModel.findByPk(config.idConfig);
            findedConfig.set({
                config: config.config
            });
            yield findedConfig.save();
            return findedConfig;
        });
    }
}
exports.default = ConfigService;
//# sourceMappingURL=config.service.js.map