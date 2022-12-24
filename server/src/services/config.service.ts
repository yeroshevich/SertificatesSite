import {ConfigModel, ConfigPage} from "@database/sequelize";
import {doc} from "prettier";
import {HttpException} from "@exceptions/HttpException";
import {isEmpty} from "@utils/util";
import {Page} from "@interfaces/ConfigPage";
import {Config} from "@interfaces/Config";


export default class ConfigService{
  public async findConfigByPage(page:string){
    if(isEmpty(page))throw new HttpException(500,'page title is empty')

    const findedPage:Page =await ConfigPage.findOne({
      where:{
        title:page
      },raw:true
    })
    if(!findedPage) throw new HttpException(404,'page is not found')

    const config:Config =await ConfigModel.findOne({
      where:{
        pageId:findedPage.idPage
      },raw:true
    })

    if(!config) throw new HttpException(404,'config not found')

    return config
  }
  public async updateConfig(config:Config){
    const findedConfig = await ConfigModel.findByPk(config.idConfig)
    findedConfig.set({
      config:config.config
    })
    await findedConfig.save()
    return findedConfig
  }
}
