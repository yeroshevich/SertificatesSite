import {serverRequest} from "../../app/http/serverRequest";
import {ChangeEvent, useEffect, useState} from "react";
import {PhisicalPageConfig} from "../../interfaces/PhisicalPageConfig";
import defaultConfiguration from "../../app/defaultConfiguration";
import {SaveConfig} from "../../interfaces/SaveConfig";
import styles from '../../styles/PhysicalConscruct.module.scss'
import Buttons from "./Buttons";
import {PlusOutlined} from "@ant-design/icons";
import {HeadLink} from "../../interfaces/HeadLink";
import HeadConstructor from "./HeadConstructor";
import LogoConstructor from "./LogoConstructor";
import {Logo} from "../../interfaces/Logo";
import LinksConstruct from "./LinksConstruct";
import {Link} from "../../interfaces/Link";
import ContentConstructor from "./ContentConstructor";
import {ContentPair} from "../../interfaces/ContentPair";
import {Image} from "../../interfaces/Image";
import ImageConstructor from "./ImageConstructor";
import SliderConstructor from "./SliderConstructor";

const PAGE_TITLE = 'physical'

const PhysicalPageContruct = () => {
    const [config,setConfig] = useState<PhisicalPageConfig>()
    const {saveConfig,fetchConfig} = defaultConfiguration()


    const fetchConfiguration = ()=>{
        fetchConfig(PAGE_TITLE)
            .then(res=>setConfig(res))
            .catch(e=>console.log(e))

    }
    const saveConfiguration = ()=>{
        saveConfig({config,page:PAGE_TITLE} as SaveConfig)
            .then(res=>console.log(res))
            .catch(e=>console.log(e))
    }

    useEffect(()=>{
       fetchConfiguration()
    },[])

    const handleAddHeadLink = ()=>{
        if(config?.head && config.head.length<10)
            setConfig({...config,head:[...config.head,{rel:'',href:''}]})
    }
    const handleTitleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        if(config?.title)
            setConfig({...config,title:e.target.value})
    }
    const handleLogoChange = (changed:Logo)=>{
        if(config?.logo)
            setConfig({...config,logo:changed})
    }
    const handleSaveLinks = (changedLinks:Array<Link>)=>{
        if(config?.links)
            setConfig({...config,links:changedLinks})
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
    const handleAddImage = ()=>{
        if(config?.carousel)
            setConfig({...config,carousel:[...config.carousel,{url:'',title:'',alt:''}]})
    }
    useEffect(()=>{
        console.log(config?.carousel)
    },[config?.carousel])

    return (
        <div className={styles.content}>
            {
                config &&
                <div>
                    <fieldset>
                        <legend>Шапка</legend>
                        <HeadConstructor head={config?.head} addLink={handleAddHeadLink}/>
                        <fieldset>
                            <legend>Title</legend>
                            <input type="text" onChange={handleTitleChange} value={config.title}/>
                        </fieldset>
                        <LogoConstructor
                            logoChange={handleLogoChange}
                            logo={config.logo}/>
                        <LinksConstruct links={config.links} saveLinks={handleSaveLinks}/>
                    </fieldset>


                    <fieldset>
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
                                legend={'Slider'} addImage={handleAddImage}/>

                        </div>
                    </fieldset>


                    <fieldset>
                        <legend>Подвал</legend>

                    </fieldset>
                </div>
            }
            <Buttons cancel={fetchConfiguration} save={saveConfiguration}>
            </Buttons >
        </div>
    );
};

export default PhysicalPageContruct;