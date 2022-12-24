"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("@/app"));
const auth_controller_1 = require("@controllers/auth.controller");
const validateEnv_1 = tslib_1.__importDefault(require("@utils/validateEnv"));
const image_controller_1 = tslib_1.__importDefault(require("@controllers/image.controller"));
const config_controller_1 = tslib_1.__importDefault(require("@controllers/config.controller"));
(0, validateEnv_1.default)();
const app = new app_1.default([auth_controller_1.AuthController, image_controller_1.default, config_controller_1.default]);
app.listen();
//# sourceMappingURL=server.js.map