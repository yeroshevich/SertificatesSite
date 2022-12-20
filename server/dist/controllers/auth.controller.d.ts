import { Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
export declare class AuthController {
    authService: AuthService;
    signUp(userData: CreateUserDto): Promise<{
        data: User;
        message: string;
    }>;
    logIn(res: Response, userData: CreateUserDto): Promise<{
        data: User;
        message: string;
    }>;
    logOut(req: RequestWithUser, res: Response): Promise<{
        data: User;
        message: string;
    }>;
}
