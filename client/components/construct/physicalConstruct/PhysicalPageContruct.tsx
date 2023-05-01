import {ChangeEvent, useContext, useEffect, useState} from "react";
import {PhisicalPage, PhisicalPageConfig} from "../../../interfaces/PhisicalPageConfig";
import styles from './PhysicalConscruct.module.scss'
import {HeadLink} from "../../../interfaces/HeadLink";
import HeadConstructor from "../headerCostruct/HeadConstructor";
import LogoConstructor from "../logoConstruct/LogoConstructor";
import {Logo} from "../../../interfaces/Logo";
import LinksConstruct from "../linksConstruct/LinksConstruct";
import {Link} from "../../../interfaces/Link";
import ContentConstructor from "../contentConstruct/ContentConstructor";
import {ContentPair} from "../../../interfaces/ContentPair";
import {Image} from "../../../interfaces/Image";
import ImageConstructor from "../imageConstruct/ImageConstructor";
import SliderConstructor from "../sliderConstruct/SliderConstructor";
import FooterLinksConstruct from "../footerConstruct/FooterLinksConstruct";
import FaqConstruct from "../faqContruct/FaqConstruct";
import {FAQ} from "../../../interfaces/FAQ";
import ConstructLayout from "../constructLayout/ConstructLayout";
import TitleConstruct from "../titleConstruct/TitleConstruct";
import useConfiguration from "../../../hooks/useConfiguration";
import Fieldset from "../fieldConstruct/Fieldset";
import MapConstructor from "../mapConstruct/MapConstructor";
import {GeometryCoordinates} from "../../../interfaces/GeometryCoordinates";
import {serverRequest} from "../../../app/http/serverRequest";

const PAGE_TITLE = 'physical'

const PhysicalPageContruct = () => {
    const {config,fetchConfiguration,contextHolder,saveConfiguration,setConfig}= useConfiguration<PhisicalPageConfig>(PAGE_TITLE)

    useEffect(()=>{
       fetchConfiguration()
    },[])



    const handleSaveHead = (change:Array<HeadLink>):void=>{
        if(config?.head )
            setConfig({...config,head:change})
    }
    const handleSaveTitle = (changed:string)=>{
        if(config?.title || config?.title == '')
            setConfig({...config,title:changed})
    }
    const handleLogoChange = (changed:Logo)=>{
        if(config?.logo)
            setConfig({...config,logo:changed})
    }
    const handleFooterLogoChange = (changed:Logo)=>{
        if(config?.footerLogo)
            setConfig({...config,footerLogo:changed})
    }
    const handleSaveLinks = (changedLinks:Array<Link>)=>{
        if(config?.links)
            setConfig({...config,links:changedLinks})
    }
    const handleSaveFooterLinks = (changedLinks:Array<Link>)=>{
        if(config?.links)
            setConfig({...config,footerLinks:changedLinks})
    }
    const handleSaveContent = (changeContent:Array<ContentPair>)=>{
        if(config?.content)
            setConfig({...config,content:changeContent})
    }
    const handleSaveRectImage = (change:Image)=>{
        if(config?.rectImage)
            setConfig({...config,rectImage:change})
    }
    const handleSaveSmallImage = (change:Image)=>{
        if(config?.smallImage)
            setConfig({...config,smallImage:change})
    }
    const handleSaveCaroussel = (change:Array<Image>)=>{
        if(config?.carousel)
            setConfig({...config,carousel:change})
    }
    const handleSaveFaqs = (changed:Array<FAQ>)=>{
        if(config?.faq)
            setConfig({...config,faq:changed})
    }

    const handleSaveAddresses = (changed:Array<GeometryCoordinates>)=>{
        if(config?.addresses)
            setConfig({...config,addresses:changed})
    }

    return (
        <ConstructLayout reloadClick={fetchConfiguration} saveClick={saveConfiguration}>
            {contextHolder}
            {
                config &&
                <div>
                    <fieldset className={styles.contentPart}>
                        <legend>Шапка</legend>
                        <HeadConstructor saveHead={handleSaveHead} head={config?.head ? config.head : []}/>
                       <TitleConstruct saveTitle={handleSaveTitle} title={config.title}/>
                        <LogoConstructor
                            logoChange={handleLogoChange}
                            logo={config.logo}/>
                        <LinksConstruct links={config.links} saveLinks={handleSaveLinks}/>
                    </fieldset>


                    <fieldset className={styles.contentPart}>
                        <legend>Контент</legend>
                        <div style={{paddingInline:'15px'}}>
                            <ContentConstructor
                                content={config.content}
                                saveContent={handleSaveContent}/>
                            <ImageConstructor
                                image={config.rectImage}
                                imageChange={handleSaveRectImage}
                                legend={'For first content'}/>
                            <ImageConstructor
                                image={config.smallImage}
                                imageChange={handleSaveSmallImage}
                                legend={'For second content'}/>
                            <SliderConstructor
                                carousel={config.carousel}
                                saveCarousel={handleSaveCaroussel}
                                legend={'Slider'} />
                            <Fieldset legend={'Адреса'}>
                                <MapConstructor addresses={config.addresses} saveAddresses={handleSaveAddresses}/>
                            </Fieldset>
                            <FaqConstruct faqs={config.faq} saveFaqs={handleSaveFaqs}/>
                        </div>
                    </fieldset>


                    <fieldset className={styles.contentPart}>
                        <legend>Подвал</legend>
                        <div style={{paddingInline:'15px'}}>
                            <LogoConstructor logo={config.footerLogo} logoChange={handleFooterLogoChange}/>
                            <FooterLinksConstruct links={config.footerLinks} saveFooterLinks={handleSaveFooterLinks}/>
                        </div>
                    </fieldset>
                </div>
            }

        </ConstructLayout>
    );
};

export default PhysicalPageContruct;