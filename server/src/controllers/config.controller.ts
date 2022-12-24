import {Body, Controller, Get, Param, Post} from "routing-controllers";
import {ConfigPage} from "@database/sequelize";
import ConfigService from "@services/config.service";
import {Config} from "@interfaces/Config";

@Controller()
export default class ConfigController{
  private configService = new ConfigService()

  @Get('/configs/:page')
  public async getConfigs(@Param('page')page:string){
    return await this.configService.findConfigByPage(page)
  }
  @Post('/configs')
  public async updateConfig(@Body() config:Config){
    return await this.configService.updateConfig(config)
  }
}
