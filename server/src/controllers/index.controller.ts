import {Controller, Get} from "routing-controllers";


@Controller()
export class IndexController {

  @Get('/')
  async index() {
    return `изменения сохраняются IndexController to index ${new Date().toString()}`
  }
}
