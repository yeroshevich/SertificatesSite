import { Config } from "@interfaces/Config";
export default class ConfigService {
    findConfigByPage(page: string): Promise<any>;
    updateConfig(config: Config): Promise<any>;
}
