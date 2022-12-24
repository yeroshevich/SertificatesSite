"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const HttpException_1 = require("@exceptions/HttpException");
class ImageService {
    constructor() {
        this.path = `${process.cwd()}\\src\\userImages\\`;
    }
    findFile(path) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const file = fs_1.default.readFileSync(this.path + path);
                if (!file)
                    throw new HttpException_1.HttpException(404, 'file not found');
                return { file };
            }
            catch (e) {
                return { file: new Buffer(this.path) };
            }
        });
    }
}
exports.default = ImageService;
//# sourceMappingURL=image.service.js.map