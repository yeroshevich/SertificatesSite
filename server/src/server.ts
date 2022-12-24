import App from '@/app';
import { AuthController } from '@controllers/auth.controller';
import validateEnv from '@utils/validateEnv';
import ImageController from "@controllers/image.controller";
import ConfigController from "@controllers/config.controller";

validateEnv();

const app = new App([AuthController,ImageController,ConfigController]);
app.listen();
