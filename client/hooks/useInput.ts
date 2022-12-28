import {ChangeEvent, useState} from "react";

export default function useInput(init:string='',callback:Function=(value:string)=>{}){
    const [value,setValue] = useState<string>(init)

    const onChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>)=>{
        setValue(e.target.value)
        callback(e.target.value)
    }
    return {value,onChange}
}