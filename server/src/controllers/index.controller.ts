import { Controller, Get, Res } from "routing-controllers";
import { Response } from "express";

@Controller()
export class IndexController {
  @Get('/')
  index(@Res() res:Response) {
    return 'ok'
  }
}
