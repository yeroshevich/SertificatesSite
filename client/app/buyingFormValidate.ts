import {useState} from "react";

export default function useBuyingFormValidate(){
    const [exception,setException] = useState<string>('')
    const [isValid,setIsValid] = useState<boolean>(false)

    const validate = (orgName:string,name:string,surname:string,phone:string,email:string)=>{
        if(!orgName){
            setResult('Наименование организации заполнено некорректно')
            return
        }
        if(!name)
        {
            setResult('Ваше имя должно быть заполнено')
            return
        }
        if(!surname){
            setResult('Ваша фамилия должна быть заполнена')
            return
        }
        if(!phone){
            setResult('Номер телефона должен быть заполнен')
            return
        }
        if(
            phone.split('').reduce((acc,item)=>{
                return acc+ (Number.isInteger(parseInt(item))?1:0)
            },0) <12)
        {
            setResult('Проверьте корректность вашего телефона')
            return
        }
        if(!email){
            setResult('Заполните поле электронной почты')
            return;
        }
        if(!email.match(/\S+@\S+\.\S+/gi)){
            setResult('Проверьте корректность вашей электронной почты')
            return
        }
        setResult('',true)
    }
    const setResult = (message:string,validiti=false)=>{
        setException(message)
        setIsValid(validiti)
    }

    return {exception,isValid,validate}
}