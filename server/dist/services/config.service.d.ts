import { Config } from "@interfaces/Config";
export default class ConfigService {
    findConfigByPage(page: string): Promise<Config>;
    updateConfig(config: Config): Promise<any>;
}
