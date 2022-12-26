import {ConfigModel, ConfigPage} from "@database/sequelize";
import {doc} from "prettier";
import {HttpException} from "@exceptions/HttpException";
import {isEmpty} from "@utils/util";
import {Page} from "@interfaces/ConfigPage";
import {Config} from "@interfaces/Config";
import {SaveConfig} from "@interfaces/SaveConfig";


export default class ConfigService{
  public async setJSON(obj:SaveConfig){
    const page = await ConfigPage.findOne({
      where:{
        title:obj.page
      }
    })
    if(!page) throw new HttpException(404,'page not found')


    const created = await ConfigModel.create({
      config:obj.config,
      userId:1,
      pageId:page.idPage
    })
  return created
  }
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
  public async updateConfig(config:SaveConfig){
    const page = await ConfigPage.findOne({
      where:{
        title:config.page
      }
    })
    if(!page) throw new HttpException(404,'page not found')


    const findedConfig = await ConfigModel.findOne({
      where:{
        pageId:page.idPage
      }
    })
    findedConfig.set({
      config:config.config
    })
    await findedConfig.save()
    return findedConfig
  }
}
