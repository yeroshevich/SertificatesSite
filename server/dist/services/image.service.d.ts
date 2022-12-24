/// <reference types="node" />
export default class ImageService {
    private path;
    findFile(path: string): Promise<{
        file: Buffer;
    }>;
}
