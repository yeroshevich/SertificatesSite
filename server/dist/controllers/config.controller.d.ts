import { SaveConfig } from "@interfaces/SaveConfig";
export default class ConfigController {
    private configService;
    getConfigs(page: string): Promise<import("../interfaces/Config").Config>;
    updateConfig(config: SaveConfig): Promise<any>;
    save(obj: SaveConfig): Promise<any>;
}
