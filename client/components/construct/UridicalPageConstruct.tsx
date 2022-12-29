import React, {useEffect} from 'react';
import useConfiguration from "../../hooks/useConfiguration";
import {UridicalPageConfig} from "../../interfaces/UridicalPageConfig";
import ConstructLayout from "./ConstructLayout";
import {HeadLink} from "../../interfaces/HeadLink";
import {Image} from "../../interfaces/Image";
import {ContentPair} from "../../interfaces/ContentPair";
import {Logo} from "../../interfaces/Logo";
import {Link} from "../../interfaces/Link";
import LogoConstructor from "./LogoConstructor";
import HeadConstructor from "./HeadConstructor";
import TitleConstruct from "./TitleConstruct";
import LinksConstruct from "./LinksConstruct";
import ImageConstructor from "./ImageConstructor";
import ContentConstructor from "./ContentConstructor";
import Fieldset from "./Fieldset";
import StringsConstruct from "./StringsConstruct";
import SliderConstructor from "./SliderConstructor";
import FooterLinksConstruct from "./FooterLinksConstruct";

const PAGE_TITLE = 'uridical'

const UridicalPageConstruct = () => {
    const {contextHolder,config,setConfig,saveConfiguration,fetchConfiguration} = useConfiguration<UridicalPageConfig>(PAGE_TITLE)

    const handleSaveHead = (changed:Array<HeadLink>)=>{
        if(config?.head)
            setConfig({...config,head:changed})
    }
    const handleSaveTitle = (changed:string)=>{
        if(config?.title)
            setConfig({...config,title:changed})
    }

    const handleSaveLogo = (changed:Logo)=>{
        if(config?.logo)
            setConfig({...config,logo:changed})
    }
    const handleSaveLinks = (changed:Array<Link>)=>{
        if(config?.links)
            setConfig({...config,links:changed})
    }

    const handleSaveBigImage = (changed:Image)=>{
        if(config?.bigImage)
            setConfig({...config,bigImage:changed})
    }
    const handleSaveFirstContent = (changed:Array<ContentPair>)=>{
        if(config?.firstContent)
            setConfig({...config,firstContent:changed[0]})

    }
    const handleSaveSecondContentHeader = (changed:string)=>{
        if(config?.secondContent)
            setConfig({...config,secondContent:{...config.secondContent,header:changed}})
    }
    const handleSaveSecondContentBody = (changed:Array<ContentPair>)=>{
        if(config?.secondContent)
            setConfig({...config,secondContent:{...config.secondContent,content:changed}})
    }
    const handleSaveThirtContentHeader = (changed:string)=>{
        if(config?.thirtContent)
            setConfig({...config,thirtContent:{...config.thirtContent,header:changed}})
    }
    const handleSaveThirtContentImage = (changed:Image)=>{
        if(config?.thirtContent)
            setConfig({...config,thirtContent:{...config.thirtContent,image:changed}})

    }
    const handleSaveFourthHeader = (changed:string)=>{
        if(config?.fourthContent)
            setConfig({...config,fourthContent:{...config.fourthContent,header:changed}})
    }
    const handleSaveFourthDescription = (changed:Array<string>)=>{
        if(config?.fourthContent)
            setConfig({...config,fourthContent:{...config.fourthContent,descriptions:changed}})
    }
    const handleSaveFourthImages = (changed:Array<Image>)=>{
        if(config?.fourthContent)
            setConfig({...config,fourthContent:{...config.fourthContent,images:changed}})
    }
    const handleSaveFivesImage = (changed:Image) =>{
        if(config?.fivesContent)
            setConfig({...config,fivesContent:{...config.fivesContent,image:changed}})
    }
    const handleSaveFivesContent = (changed:Array<ContentPair>)=>{
        if(config?.fivesContent)
            setConfig({...config,fivesContent:{...config.fivesContent,content:changed[0]}})
    }
    const handleSaveFooterLogo = (changed:Logo)=>{
        if(config?.footerLogo)
            setConfig({...config,footerLogo:changed})
    }
    const handleSaveFooterLinks = (changed:Array<Link>)=>{
        if(config?.footerLinks)
            setConfig({...config,footerLinks:changed})
    }
    const handleSaveFooterLink = (changed:Array<Link>)=>{
        if(config?.footerLink)
            setConfig({...config,footerLink:changed[0]})
    }
    const handleSavePhones = (changed:Array<string>)=>{
        if(config?.phones)
            setConfig({...config,phones:changed})
    }

    useEffect(()=>{
       fetchConfiguration()
    },[])

    return (
        <ConstructLayout reloadClick={fetchConfiguration} saveClick={saveConfiguration}>
            {contextHolder}
            {
                config &&
                <div>
                    <fieldset>
                        <legend>Head</legend>
                        <HeadConstructor head={config.head} saveHead={handleSaveHead}/>
                        <TitleConstruct saveTitle={handleSaveTitle} title={config.title}/>
                        <LogoConstructor logo={config?.logo} logoChange={handleSaveLogo}/>
                        <LinksConstruct links={config.links} saveLinks={handleSaveLinks}/>
                    </fieldset>

                    <fieldset>
                        <legend>Контент</legend>
                        <Fieldset legend={'Первый контент'}>
                            <ImageConstructor image={config.bigImage} imageChange={handleSaveBigImage}/>
                            <ContentConstructor content={[config.firstContent]} saveContent={handleSaveFirstContent} />
                        </Fieldset>
                        <Fieldset legend={'Второй контент'}>
                            <TitleConstruct saveTitle={handleSaveSecondContentHeader} title={config.secondContent.header}/>
                            <ContentConstructor content={config.secondContent.content} saveContent={handleSaveSecondContentBody}/>
                        </Fieldset>
                        <Fieldset legend={'Третий контент'}>
                            <TitleConstruct saveTitle={handleSaveThirtContentHeader} title={config.thirtContent.header}/>
                            <ImageConstructor image={config.thirtContent.image} imageChange={handleSaveThirtContentImage}/>
                        </Fieldset>
                        <Fieldset legend={'Четвертый контент'}>
                            <TitleConstruct saveTitle={handleSaveFourthHeader} title={config.fourthContent.header} legend={'Заголовок'}/>
                            <StringsConstruct strings={config.fourthContent.descriptions} saveStrings={handleSaveFourthDescription} legend={'Описание'}/>
                            <SliderConstructor carousel={config.fourthContent.images} saveCarousel={handleSaveFourthImages} legend={'Клиенты'}/>
                        </Fieldset>
                        <Fieldset legend={'Пятый контент'}>
                            <ImageConstructor image={config.fivesContent.image} imageChange={handleSaveFivesImage}/>
                            <ContentConstructor content={[config.fivesContent.content]} saveContent={handleSaveFivesContent}/>
                        </Fieldset>
                    </fieldset>

                    <fieldset>
                        <legend>Подвал</legend>
                        <LogoConstructor logo={config.footerLogo} logoChange={handleSaveFooterLogo}/>
                        <FooterLinksConstruct links={config.footerLinks} saveFooterLinks={handleSaveFooterLinks}/>
                        <LinksConstruct links={[config.footerLink]} saveLinks={handleSaveFooterLink}/>
                        <StringsConstruct strings={config.phones} saveStrings={handleSavePhones}/>
                    </fieldset>
                </div>
            }
        </ConstructLayout>
    );
};

export default UridicalPageConstruct;