import ConstructLayout from "./ConstructLayout";
import {useEffect, useState} from "react";
import {BuyingPagePageConfig} from "../../interfaces/BuyingPageConfig";
import {HeadLink} from "../../interfaces/HeadLink";
import {Logo} from "../../interfaces/Logo";
import {Link} from "../../interfaces/Link";
import useConfiguration from "../../hooks/useConfiguration";
import HeadConstructor from "./HeadConstructor";
import LogoConstructor from "./LogoConstructor";
import TitleConstruct from "./TitleConstruct";
import FooterLinksConstruct from "./FooterLinksConstruct";
import {CheckFormPageConfig} from "../../interfaces/CheckFormPageConfig";
import ImageConstructor from "./ImageConstructor";
import {Image} from "../../interfaces/Image";
import StringsConstruct from "./StringsConstruct";

const PAGE_TITLE = 'checkform'

const CheckFormConstruct  = () => {
    const {
        config,
        fetchConfiguration,
        saveConfiguration,
        setConfig,
        contextHolder
    } = useConfiguration<CheckFormPageConfig>(PAGE_TITLE)

    const handleSaveHead = (changed:Array<HeadLink>)=>{
        if(config?.head)
            setConfig({...config,head:changed})
    }
    const handleSaveLogo = (changed:Logo)=>{
        if(config?.logo)
            setConfig({...config,logo:changed})
    }
    const handleSaveTitle = (changed:string)=>{
        if(config?.title)
            setConfig({...config,title:changed})
    }
    const handleFooterLogoSave = (changed:Logo)=>{
        if(config?.footerLogo)
            setConfig({...config,footerLogo:changed})
    }
    const handleFooterLinksSave = (changed:Array<Link>)=>{
        if(config?.footerLinks)
            setConfig({...config,footerLinks:changed})
    }

    const handleSaveHeader = (changed:string)=>{
        if(config?.header)
            setConfig({...config,header:changed})
    }
    const handleSaveDescription = (changed:Array<string>)=>{
        if(config?.description)
            setConfig({...config,description:changed})
    }
    const handleSaveFormImage = (changed:Image)=>{
        if(config?.formImage)
            setConfig({...config,formImage:changed})
    }
    const handleSaveHereLink = (changed:string)=>{
        if(config?.hereLink)
            setConfig({...config,hereLink:changed})
    }

    useEffect(()=>{
        fetchConfiguration()
    },[])

    return (
        <ConstructLayout saveClick={saveConfiguration} reloadClick={fetchConfiguration}>
            {contextHolder}
            {
                config &&
                <div>
                    <fieldset>
                        <legend>Шапка</legend>
                        <HeadConstructor head={config?.head} saveHead={handleSaveHead}/>
                        <LogoConstructor logo={config.logo} logoChange={handleSaveLogo}/>
                        <TitleConstruct saveTitle={handleSaveTitle} title={config.title}/>
                    </fieldset>

                    <fieldset>
                        <legend>Контент</legend>
                        <TitleConstruct saveTitle={handleSaveHeader} title={config.header} legend={'Заголовок'}/>
                        <StringsConstruct strings={config.description} saveStrings={handleSaveDescription} legend={'Описание'}/>
                        <ImageConstructor image={config.formImage} imageChange={handleSaveFormImage} legend={'Картинка на форме'}/>
                        <TitleConstruct saveTitle={handleSaveHereLink} title={config.hereLink} legend={'Ссылка на страницу с ознакомлением об обращении подарочных сертификатов'}/>
                    </fieldset>

                    <fieldset>
                        <legend>Подвал</legend>
                        <LogoConstructor logo={config.footerLogo} logoChange={handleFooterLogoSave} legend={'FooterLogo'}/>
                        <FooterLinksConstruct links={config.footerLinks} saveFooterLinks={handleFooterLinksSave}/>
                    </fieldset>
                </div>
            }
        </ConstructLayout>
    );
};

export default CheckFormConstruct;