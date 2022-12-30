import fs from "fs";
import {HttpException} from "@exceptions/HttpException";
import {ImageResponse} from "@interfaces/ImageResponse";
import {DOMEN} from "@config";
import {File} from "@interfaces/file.interface";

export default class ImageService{
  private path = `${process.cwd()}\\src\\userImages\\`

  public async findFile(path:string):Promise<{file:Buffer}> {
     try{
       const file = fs.readFileSync(this.path + path)

       if (!file) throw new HttpException(404, 'file not found')

       return {file}
     }catch (e){
       return {file:new Buffer(this.path)}
     }
  }
  public async findAllPathsImages():Promise<Array<ImageResponse>>{
    try{
      const files:Array<ImageResponse> = fs.readdirSync(this.path).map(x=>{return{url:DOMEN+'/images/'+ x,title:x}})
       return files
    }catch (e)
    {
      return []
    }
  }
  public async saveImage (file:File){
    fs.writeFile(this.path+file.originalname,file.buffer,(e)=>{
        if(e)
          return console.log(e)
    })
    return
  }
}
