export interface LoginResponse{
    data:User,
    message:string
}
export interface User{
    username:string,
    password:string
}