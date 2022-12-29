/// <reference types="node" />
import { ImageResponse } from "@interfaces/ImageResponse";
import { File } from "@interfaces/File";
export default class ImageService {
    private path;
    findFile(path: string): Promise<{
        file: Buffer;
    }>;
    findAllPathsImages(): Promise<Array<ImageResponse>>;
    saveImage(file: File): Promise<void>;
}
