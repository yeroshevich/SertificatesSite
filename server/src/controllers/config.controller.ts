import {Body, Controller, Get, Param, Patch, Post, UseBefore} from "routing-controllers";
import ConfigService from "@services/config.service";
import {SaveConfig} from "@interfaces/SaveConfig";
import authMiddleware from "@middlewares/auth.middleware";

@Controller()
export default class ConfigController{
  private configService = new ConfigService()

  @Get('/configs/:page')
  public async getConfigs(@Param('page')page:string){
    return await this.configService.findConfigByPage(page)
  }

  @Patch('/configs')
  @UseBefore(authMiddleware)
  public async updateConfig(@Body() config:SaveConfig){
    return await this.configService.updateConfig(config)
  }

  @Post('/configs')
  @UseBefore(authMiddleware)
  public async save(@Body() obj:SaveConfig){
    return await this.configService.setJSON(obj)
  }
}
