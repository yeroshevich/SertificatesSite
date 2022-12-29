import useNotification from "./useNotification";
import {useEffect, useState} from "react";
import defaultConfiguration from "../app/defaultConfiguration";
import {SaveConfig} from "../interfaces/SaveConfig";


export default function useConfiguration<T>(pageTitle:string){
    const {contextHolder,openNotificationWithIcon} = useNotification()
    const [config,setConfig] = useState<T>()
    const {saveConfig,fetchConfig} = defaultConfiguration()

    const saveConfiguration = ()=>{
        saveConfig({config,page:pageTitle} as SaveConfig)
            .then(res=> openNotificationWithIcon('success','Готово','Конфигурация сохранена'))
            .catch(e=> openNotificationWithIcon('error','Ошибка',`При сохранении конфигурации произошла ошибка ${e}`))
    }
    const fetchConfiguration = ()=>{
        fetchConfig(pageTitle)
            .then(res=>{
                setConfig(res)
                openNotificationWithIcon('success','Готово','Конфигурация готова для работы')
            })
            .catch(e=> openNotificationWithIcon('error','Ошибка',`При загрузке конфигурации произошла ошибка ${e}`))
    }


   return {contextHolder,config,setConfig,saveConfiguration,fetchConfiguration}
}