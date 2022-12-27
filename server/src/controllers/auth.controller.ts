import {Request, Response} from 'express';
import {Controller, Req, Body, Post, UseBefore, HttpCode, Res, Get} from 'routing-controllers';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import authMiddleware from '@middlewares/auth.middleware';
import { validationMiddleware } from '@middlewares/validation.middleware';
import AuthService from '@services/auth.service';

@Controller()
export class AuthController {
  public authService = new AuthService();

  @Post('/signup')
  @UseBefore(validationMiddleware(CreateUserDto, 'body'))
  @HttpCode(201)
  async signUp(@Body() userData: CreateUserDto) {
    const signUpUserData: User = await this.authService.signup(userData);
    return { data: signUpUserData, message: 'signup' };
  }

  @Post('/login')
  @UseBefore(validationMiddleware(CreateUserDto, 'body'))
  async logIn(@Res() res: Response, @Body() userData: CreateUserDto) {
    const { cookie, findUser } = await this.authService.login(userData);
    res.setHeader('Set-Cookie', [cookie]);
    return { data: findUser, message: 'login' };
  }

  @Post('/auth')
  //@UseBefore(authMiddleware)
  async authUser(@Req() req:Request,@Res() res:Response){
      //return {user:req.user,isAuthorized:req.user ?true:false}
    console.log(req.cookies)
    return res
  }

  @Post('/logout')
  @UseBefore(authMiddleware)
  async logOut(@Req() req: RequestWithUser, @Res() res: Response) {
    const userData: User = req.user;
    const logOutUserData: User = await this.authService.logout(userData);

    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
    return { data: logOutUserData, message: 'logout' };
  }
}
