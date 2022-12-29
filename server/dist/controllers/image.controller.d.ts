import { Response } from "express";
export default class ImageController {
    private imageService;
    private upload;
    findImageByPath(res: Response, filePath: string): Promise<Response<any, Record<string, any>>>;
    findAllImages(): Promise<import("../interfaces/ImageResponse").ImageResponse[]>;
    uploadImage(req: any, res: any): Promise<string>;
}
