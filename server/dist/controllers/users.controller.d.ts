import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';
export declare class UsersController {
    userService: userService;
    getUsers(): Promise<{
        data: User[];
        message: string;
    }>;
    getUserById(userId: number): Promise<{
        data: User;
        message: string;
    }>;
    createUser(userData: CreateUserDto): Promise<{
        data: User;
        message: string;
    }>;
    updateUser(userId: number, userData: CreateUserDto): Promise<{
        data: User[];
        message: string;
    }>;
    deleteUser(userId: number): Promise<{
        data: User[];
        message: string;
    }>;
}
