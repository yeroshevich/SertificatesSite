"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("@/app"));
const auth_controller_1 = require("@controllers/auth.controller");
const index_controller_1 = require("@controllers/index.controller");
const validateEnv_1 = tslib_1.__importDefault(require("@utils/validateEnv"));
const config_controller_1 = tslib_1.__importDefault(require("@controllers/config.controller"));
const image_controller_1 = tslib_1.__importDefault(require("@controllers/image.controller"));
(0, validateEnv_1.default)();
const app = new app_1.default([auth_controller_1.AuthController, index_controller_1.IndexController, config_controller_1.default, image_controller_1.default]);
try {
    app.listen();
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=server.js.map