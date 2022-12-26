"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const image_service_1 = tslib_1.__importDefault(require("@services/image.service"));
let ImageController = class ImageController {
    constructor() {
        this.imageService = new image_service_1.default();
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
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ImageController.prototype, "findAllImages", null);
ImageController = tslib_1.__decorate([
    (0, routing_controllers_1.Controller)()
], ImageController);
exports.default = ImageController;
// Привет, я первый раз пишу rest api на node js и у меня стоит задача на раздачу файлов с папки
//# sourceMappingURL=image.controller.js.map