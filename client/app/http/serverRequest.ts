import axios from "axios";

export const serverRequest = axios.create({
    baseURL:process.env["SERVER_DOMEN "],
    headers:{
        'Access-Control-Allow-Origin':'http:/127.0.0:3000',
        'Access-Control-Allow-Headers':'Content-type',
    },withCredentials:true
})

