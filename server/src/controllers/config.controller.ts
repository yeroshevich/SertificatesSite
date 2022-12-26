import {Body, Controller, Get, Param, Patch, Post} from "routing-controllers";
import ConfigService from "@services/config.service";
import {SaveConfig} from "@interfaces/SaveConfig";

@Controller()
export default class ConfigController{
  private configService = new ConfigService()

  @Get('/configs/:page')
  public async getConfigs(@Param('page')page:string){
    return await this.configService.findConfigByPage(page)
  }
  @Patch('/configs')
  public async updateConfig(@Body() config:SaveConfig){
    return await this.configService.updateConfig(config)
  }
  @Post('/configs')
  public async save(@Body() obj:SaveConfig){
    return await this.configService.setJSON(obj)
  }
}
