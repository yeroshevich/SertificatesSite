import axios from "axios";

export const serverRequest = axios.create({
    baseURL:'http://localhost:8080',
    headers:{
        //'Access-Control-Allow-Origin':'http:/127.0.0:3000',
        'Access-Control-Allow-Headers':'Content-type',
    },withCredentials:true
})

