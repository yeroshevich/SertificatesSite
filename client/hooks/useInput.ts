import {ChangeEvent, useState} from "react";

export default function useInput(callback:Function=(value:string)=>{}){
    const [value,setValue] = useState<string>()

    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
        callback(e.target.value)
    }
    return {value,onChange}
}