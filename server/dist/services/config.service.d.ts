import { Config } from "@interfaces/Config";
import { SaveConfig } from "@interfaces/SaveConfig";
export default class ConfigService {
    setJSON(obj: SaveConfig): Promise<any>;
    findConfigByPage(page: string): Promise<Config>;
    updateConfig(config: SaveConfig): Promise<any>;
}
