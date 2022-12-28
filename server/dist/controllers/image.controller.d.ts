import { Request, Response } from "express";
export default class ImageController {
    private imageService;
    findImageByPath(res: Response, filePath: string): Promise<Response<any, Record<string, any>>>;
    findAllImages(): Promise<import("../interfaces/ImageResponse").ImageResponse[]>;
    uploadImage(file: any, req: Request): Promise<string>;
}
