import App from '@/app';
import { AuthController } from '@controllers/auth.controller';
import { IndexController } from '@controllers/index.controller';
import validateEnv from '@utils/validateEnv';
import ConfigController from "@controllers/config.controller";
import ImageController from "@controllers/image.controller";

validateEnv();

const app = new App([AuthController, IndexController, ConfigController,ImageController]);
try{
  app.listen();

}catch (e)
{
  console.log(e)
}
