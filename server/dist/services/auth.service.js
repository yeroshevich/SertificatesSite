"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const _config_1 = require("@config");
const HttpException_1 = require("@exceptions/HttpException");
const util_1 = require("@utils/util");
const sequelize_1 = require("@database/sequelize");
class AuthService {
    signup(userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(userData))
                throw new HttpException_1.HttpException(400, "userData is empty");
            const findUser = yield sequelize_1.UserModel.findOne({
                where: {
                    username: userData.username
                }, raw: true
            });
            if (findUser)
                throw new HttpException_1.HttpException(409, `This username ${userData.username} already exists`);
            const hashedPassword = yield (0, bcrypt_1.hash)(userData.password, 10);
            const createUserData = Object.assign(Object.assign({}, userData), { password: hashedPassword });
            const data = yield sequelize_1.UserModel.create(createUserData);
            return data;
        });
    }
    login(userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(userData))
                throw new HttpException_1.HttpException(400, "userData is empty");
            const findUser = yield sequelize_1.UserModel.findOne({
                where: {
                    username: userData.username
                }, raw: true
            });
            if (!findUser)
                throw new HttpException_1.HttpException(409, `This email ${userData.username} was not found`);
            const isPasswordMatching = yield (0, bcrypt_1.compare)(userData.password, findUser.password);
            if (!isPasswordMatching)
                throw new HttpException_1.HttpException(409, "Password is not matching");
            const tokenData = this.createToken(findUser);
            const cookie = this.createCookie(tokenData);
            return { cookie, findUser };
        });
    }
    logout(userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(userData))
                throw new HttpException_1.HttpException(400, "userData is empty");
            const findUser = yield sequelize_1.UserModel.findOne({
                where: {
                    username: userData.username,
                    password: userData.password
                }, raw: true
            });
            if (!findUser)
                throw new HttpException_1.HttpException(409, "User doesn't exist");
            return findUser;
        });
    }
    createToken(user) {
        const dataStoredInToken = { id: user.idUser };
        const secretKey = _config_1.SECRET_KEY;
        const expiresIn = new Date().getTime() + 60 * 60;
        return { expiresIn, token: (0, jsonwebtoken_1.sign)(dataStoredInToken, secretKey, { expiresIn }) };
    }
    createCookie(tokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map