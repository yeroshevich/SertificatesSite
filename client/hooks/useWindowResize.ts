import {useEffect} from "react";

export default function useWindowResize(size:number,callback:Function){
    const onResize = ()=>{
        if(window.innerWidth<=size)
            callback()
    }
    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>window.removeEventListener('resize',onResize)
    },[])
}