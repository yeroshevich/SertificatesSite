import {useRouter} from "next/router";

export default function useRedirect(){
    const router = useRouter()
    const routeTo=(path:string)=>{
        router.push(path)
    }
    return routeTo
}