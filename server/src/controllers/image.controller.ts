import {Controller, Get, Param, Res} from "routing-controllers";
import { Response} from "express";
import ImageService from "@services/image.service";
import {promisify} from "util";
import fs from "fs";



@Controller()
export default class ImageController{

  private imageService = new ImageService()

  @Get('/images/:path')
  public async findImageByPath(@Res() res:Response,@Param('path') filePath:string){
    // const {file} = await this.imageService.findFile(filePath)
    // /////////// // тоже возвращение файла
    //  res.setHeader('Content-type','image/png')
    //  res.write(file)
    // return res.end()
    // //////////////// позволяет скачать файл
    await promisify<string, void>(res.download.bind(res))(`${process.cwd()}\\src\\userImages\\temp.png`)
    return res

    // /////// просто возвращает файл
    // res.setHeader('Content-type','image/png')
    // return file



  }
  @Get('/images')
  public async findAllImages(){

  }

}
// Привет, я первый раз пишу rest api на node js и у меня стоит задача на раздачу файлов с папки
