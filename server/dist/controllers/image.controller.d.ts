import { Response } from "express";
export default class ImageController {
    private imageService;
    findImageByPath(res: Response, filePath: string): Promise<Response<any, Record<string, any>>>;
    findAllImages(): Promise<void>;
}
