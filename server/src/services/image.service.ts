import fs from "fs";
import {HttpException} from "@exceptions/HttpException";

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
}
