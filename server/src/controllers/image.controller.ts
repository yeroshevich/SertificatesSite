import {Controller, Get, Param, Res} from "routing-controllers";
import { Response} from "express";
import ImageService from "@services/image.service";



@Controller()
export default class ImageController{

  private imageService = new ImageService()

  @Get('/images/:path')
  public async findImageByPath(@Res() res:Response,@Param('path') filePath:string){
    const {file} = await this.imageService.findFile(filePath)

    res.setHeader('Content-type','image/png')
    res.write(file)

    ////////////////

    res.download(`${process.cwd()}\\src\\userImages\\`,'temp.png')
    return res.end()


  }
  @Get('/images')
  public async findAllImages(){

  }

}
// Привет, я первый раз пишу rest api на node js и у меня стоит задача на раздачу файлов с папки
