import {Body, Controller, Get, Param, Post, Req, Res, UseBefore} from "routing-controllers";
import {Request, Response} from "express";
import ImageService from "@services/image.service";
import authMiddleware from "@middlewares/auth.middleware";
import multer from "multer";



@Controller()
export default class ImageController{

  private imageService = new ImageService()

  @Get('/images/:path')
  public async findImageByPath(@Res() res:Response,@Param('path') filePath:string){
    const {file} = await this.imageService.findFile(filePath)
    /////////// // тоже возвращение файла
     res.setHeader('Content-type','image/png')
    res.setHeader('Cross-Origin-Resource-Policy','cross-origin')
     res.write(file)
    return res.end()
    // //////////////// позволяет скачать файл
    // await promisify<string, void>(res.download.bind(res))(`${process.cwd()}\\src\\userImages\\temp.png`)
    // return res

    // /////// просто возвращает файл
    // res.setHeader('Content-type','image/png')
    // return file
  }
  @Get('/images')
  @UseBefore(authMiddleware)
  public async findAllImages(){
    return this.imageService.findAllPathsImages()
  }
  @Post('/images')
  @UseBefore(authMiddleware)
  public async uploadImage(@Body() file:any,@Req() req:Request){
    console.log(file)
    console.log(req.body)
    return 'ok'
  }

}
