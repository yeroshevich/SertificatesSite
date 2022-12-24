import { Config } from "@interfaces/Config";
export default class ConfigController {
    private configService;
    getConfigs(page: string): Promise<Config>;
    updateConfig(config: Config): Promise<any>;
}
