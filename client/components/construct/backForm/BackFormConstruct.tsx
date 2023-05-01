import {useEffect, useLayoutEffect, useState} from "react";
import {BuyingPagePageConfig} from "../../../interfaces/BuyingPageConfig";
import ConstructLayout from "../constructLayout/ConstructLayout";
import HeadConstructor from "../headerCostruct/HeadConstructor";
import {HeadLink} from "../../../interfaces/HeadLink";
import LogoConstructor from "../logoConstruct/LogoConstructor";
import {Logo} from "../../../interfaces/Logo";
import TitleConstruct from "../titleConstruct/TitleConstruct";
import FooterLinksConstruct from "../footerConstruct/FooterLinksConstruct";
import {Link} from "../../../interfaces/Link";
import useConfiguration from "../../../hooks/useConfiguration";

const PAGE_TITLE = 'buyingpage'

const BackFormConstruct = () => {
    const {
        config,
        fetchConfiguration,
        saveConfiguration,
        setConfig,
        contextHolder
    } = useConfiguration<BuyingPagePageConfig>(PAGE_TITLE)

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

    useEffect(()=>{
       fetchConfiguration()
    },[])

    return (
        <ConstructLayout saveClick={saveConfiguration} reloadClick={fetchConfiguration}>
            {contextHolder}
            {
                config &&
                <div>
                    <HeadConstructor head={config?.head} saveHead={handleSaveHead}/>
                    <LogoConstructor logo={config.logo} logoChange={handleSaveLogo}/>
                    <TitleConstruct saveTitle={handleSaveTitle} title={config.title}/>
                    <LogoConstructor logo={config.footerLogo} logoChange={handleFooterLogoSave} legend={'FooterLogo'}/>
                    <FooterLinksConstruct links={config.footerLinks} saveFooterLinks={handleFooterLinksSave}/>
                </div>
            }
        </ConstructLayout>
    );
};

export default BackFormConstruct;