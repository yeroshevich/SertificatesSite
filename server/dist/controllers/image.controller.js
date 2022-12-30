"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const image_service_1 = tslib_1.__importDefault(require("@services/image.service"));
const auth_middleware_1 = tslib_1.__importDefault(require("@middlewares/auth.middleware"));
const multer_1 = tslib_1.__importDefault(require("multer"));
let ImageController = class ImageController {
    constructor() {
        this.imageService = new image_service_1.default();
        this.upload = (0, multer_1.default)({ dest: 'userImages/' });
    }
    findImageByPath(res, filePath) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { file } = yield this.imageService.findFile(filePath);
            /////////// // тоже возвращение файла
            res.setHeader('Content-type', 'image/png');
            res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
            res.write(file);
            return res.end();
            // //////////////// позволяет скачать файл
            // await promisify<string, void>(res.download.bind(res))(`${process.cwd()}\\src\\userImages\\temp.png`)
            // return res
            // /////// просто возвращает файл
            // res.setHeader('Content-type','image/png')
            // return file
        });
    }
    findAllImages() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.imageService.findAllPathsImages();
        });
    }
    uploadImage(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const file = req.files[0];
            yield this.imageService.saveImage(file);
            return res.end();
        });
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/images/:path'),
    tslib_1.__param(0, (0, routing_controllers_1.Res)()),
    tslib_1.__param(1, (0, routing_controllers_1.Param)('path')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageController.prototype, "findImageByPath", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/images'),
    (0, routing_controllers_1.UseBefore)(auth_middleware_1.default),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ImageController.prototype, "findAllImages", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/images'),
    (0, routing_controllers_1.UseBefore)(auth_middleware_1.default),
    tslib_1.__param(0, (0, routing_controllers_1.Req)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageController.prototype, "uploadImage", null);
ImageController = tslib_1.__decorate([
    (0, routing_controllers_1.Controller)()
], ImageController);
exports.default = ImageController;
//# sourceMappingURL=image.controller.js.map