import {PhisicalPageConfig} from "../interfaces/PhisicalPageConfig";
import {createContext} from "react";
import {UridicalPageConfig} from "../interfaces/UridicalPageConfig";
import {CheckFormPageConfig} from "../interfaces/CheckFormPageConfig";
import {BuyingPagePageConfig} from "../interfaces/BuyingPageConfig";

export const ConfigContext = createContext({
    config: {} as PhisicalPageConfig | UridicalPageConfig | CheckFormPageConfig | BuyingPagePageConfig,
    setConfig : (newConf:any)=>{}

})