import { Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
import { RequestWithUser } from "@interfaces/auth.interface";
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
    authUser(req: RequestWithUser, res: Response): Promise<{
        user: User;
        isAuthorized: boolean;
    }>;
    logOut(req: RequestWithUser, res: Response): Promise<{
        data: User;
        message: string;
    }>;
}
