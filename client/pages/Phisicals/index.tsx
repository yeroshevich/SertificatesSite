import PhisicalHeader from "../../components/phisicals/header/PhisicalHeader";
import PhisicalContent from "../../components/phisicals/content/PhisicalContent";
import PhisicalFooter from "../../components/phisicals/footer/PhisicalFooter";
import {PhisicalPage, PhisicalPageConfig} from "../../interfaces/PhisicalPageConfig";
import TopScroll from "../../components/topScroll/TopScroll";
import Head from "next/head";
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