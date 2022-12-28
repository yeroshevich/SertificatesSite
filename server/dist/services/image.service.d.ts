/// <reference types="node" />
import { ImageResponse } from "@interfaces/ImageResponse";
export default class ImageService {
    private path;
    findFile(path: string): Promise<{
        file: Buffer;
    }>;
    findAllPathsImages(): Promise<Array<ImageResponse>>;
}
