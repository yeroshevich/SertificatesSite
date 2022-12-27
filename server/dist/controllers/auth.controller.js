"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const users_dto_1 = require("@dtos/users.dto");
const auth_middleware_1 = tslib_1.__importDefault(require("@middlewares/auth.middleware"));
const validation_middleware_1 = require("@middlewares/validation.middleware");
const auth_service_1 = tslib_1.__importDefault(require("@services/auth.service"));
let AuthController = class AuthController {
    constructor() {
        this.authService = new auth_service_1.default();
    }
    signUp(userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const signUpUserData = yield this.authService.signup(userData);
            return { data: signUpUserData, message: 'signup' };
        });
    }
    logIn(res, userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { cookie, findUser } = yield this.authService.login(userData);
            res.setHeader('Set-Cookie', [cookie]);
            return { data: findUser, message: 'login' };
        });
    }
    authUser(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return { user: req.user, isAuthorized: req.user ? true : false };
        });
    }
    logOut(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userData = yield req.user;
            const logOutUserData = yield this.authService.logout(userData);
            res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
            return { data: logOutUserData, message: 'logout' };
        });
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/signup'),
    (0, routing_controllers_1.UseBefore)((0, validation_middleware_1.validationMiddleware)(users_dto_1.CreateUserDto, 'body')),
    (0, routing_controllers_1.HttpCode)(201),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [users_dto_1.CreateUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/login'),
    (0, routing_controllers_1.UseBefore)((0, validation_middleware_1.validationMiddleware)(users_dto_1.CreateUserDto, 'body')),
    tslib_1.__param(0, (0, routing_controllers_1.Res)()),
    tslib_1.__param(1, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, users_dto_1.CreateUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "logIn", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/auth'),
    (0, routing_controllers_1.UseBefore)(auth_middleware_1.default),
    tslib_1.__param(0, (0, routing_controllers_1.Req)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "authUser", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/logout'),
    (0, routing_controllers_1.UseBefore)(auth_middleware_1.default),
    tslib_1.__param(0, (0, routing_controllers_1.Req)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "logOut", null);
AuthController = tslib_1.__decorate([
    (0, routing_controllers_1.Controller)()
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map