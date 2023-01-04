import PhisicalHeader from "../../components/PhisicalHeader";
import PhisicalContent from "../../components/PhisicalContent";
import PhisicalFooter from "../../components/PhisicalFooter";
import {PhisicalPage, PhisicalPageConfig} from "../../interfaces/PhisicalPageConfig";
import TopScroll from "../../components/TopScroll";
import {serverRequest} from "../../app/http/serverRequest";
import Head from "next/head";
import defaultConfiguration from "../../app/defaultConfiguration";
import {useEffect, useState} from "react";
import useConfiguration from "../../hooks/useConfiguration";
import useRedirect from "../../hooks/useRedirect";

export interface PhisicalPageProps{
    config:PhisicalPage
}
const PhisicalsPage = () => {
    const {fetchConfiguration,config} = useConfiguration<PhisicalPageConfig>('physical')
    const routeTo = useRedirect()
    useEffect(()=>{
        try{
            fetchConfiguration()
        }catch (e)
        {
            routeTo('/404')
        }
    },[])


    return (
        <>
            {
                config &&
                <>
                    <Head>
                        {config.head.map((link,index)=><link rel={link.rel} href={link.href} key={index}/>)}
                        <title>{config.title}</title>
                    </Head>
                    <PhisicalHeader
                        uridicalLink={config.uridicalLink}
                        logo={config.logo}
                        links={config.links}
                    />
                    <PhisicalContent
                        content={config.content}
                        rectImage={config.rectImage}
                        smallImage={config.smallImage}
                        carousel={config.carousel}
                        addresses={config.addresses}
                        faq={config.faq}
                    />
                    <PhisicalFooter
                        links={config.footerLinks}
                        logo={config.footerLogo}
                    />
                    <TopScroll/>
                </>
            }
        </>
    );
};

export default PhisicalsPage;