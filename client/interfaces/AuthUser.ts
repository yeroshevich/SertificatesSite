import {User} from "./LoginResponse";

export interface AuthUser{
    user:User,
    isAuthorized:boolean
}