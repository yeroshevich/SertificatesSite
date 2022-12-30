import { Request, Response } from "express";
export default class ImageController {
    private imageService;
    private upload;
    findImageByPath(res: Response, filePath: string): Promise<Response<any, Record<string, any>>>;
    findAllImages(): Promise<import("../interfaces/ImageResponse").ImageResponse[]>;
    uploadImage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
