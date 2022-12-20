"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const users_dto_1 = require("@dtos/users.dto");
const users_service_1 = tslib_1.__importDefault(require("@services/users.service"));
const validation_middleware_1 = require("@middlewares/validation.middleware");
let UsersController = class UsersController {
    constructor() {
        this.userService = new users_service_1.default();
    }
    async getUsers() {
        const findAllUsersData = await this.userService.findAllUser();
        return { data: findAllUsersData, message: 'findAll' };
    }
    async getUserById(userId) {
        const findOneUserData = await this.userService.findUserById(userId);
        return { data: findOneUserData, message: 'findOne' };
    }
    async createUser(userData) {
        const createUserData = await this.userService.createUser(userData);
        return { data: createUserData, message: 'created' };
    }
    async updateUser(userId, userData) {
        const updateUserData = await this.userService.updateUser(userId, userData);
        return { data: updateUserData, message: 'updated' };
    }
    async deleteUser(userId) {
        const deleteUserData = await this.userService.deleteUser(userId);
        return { data: deleteUserData, message: 'deleted' };
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/users'),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: 'Return a list of users' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/users/:id'),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: 'Return find a user' }),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/users'),
    (0, routing_controllers_1.HttpCode)(201),
    (0, routing_controllers_1.UseBefore)((0, validation_middleware_1.validationMiddleware)(users_dto_1.CreateUserDto, 'body')),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: 'Create a new user' }),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [users_dto_1.CreateUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Put)('/users/:id'),
    (0, routing_controllers_1.UseBefore)((0, validation_middleware_1.validationMiddleware)(users_dto_1.CreateUserDto, 'body', true)),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: 'Update a user' }),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__param(1, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, users_dto_1.CreateUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Delete)('/users/:id'),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: 'Delete a user' }),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = tslib_1.__decorate([
    (0, routing_controllers_1.Controller)()
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map