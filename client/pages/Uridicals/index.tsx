import UridicalHeader from "../../components/UridicalHeader";
import UridicalFooter from "../../components/UridicalFooter";
import UridicalContent from "../../components/UridicalContent";
import {serverRequest} from "../../app/http/serverRequest";
import {UridicalPage, UridicalPageConfig} from "../../interfaces/UridicalPageConfig";
import Head from "next/head";
import defaultConfiguration from "../../app/defaultConfiguration";
import useConfiguration from "../../hooks/useConfiguration";
import {useEffect} from "react";
import useRedirect from "../../hooks/useRedirect";

interface UridicalsPageProps{
    config:UridicalPageConfig
}

const UridicalsPage = () => {
    const {config,fetchConfiguration} = useConfiguration<UridicalPageConfig>('uridical')
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
                        <title>{config.title}</title>
                        {config.head.map((link,index)=> <link key={index} rel={link.rel} href={link.href}/>)}
                    </Head>
                    <UridicalHeader
                        templateProps={{
                            uridicalLink:config.uridicalLink,
                            links:config.links,
                            logo:config.logo
                        }}
                    />
                    <UridicalContent
                        firstContent={config.firstContent}
                        secondContent={config.secondContent}
                        thirtContent={config.thirtContent}
                        fourthContent={config.fourthContent}
                        fivesContent={config.fivesContent}
                        bigImage={config.bigImage}
                    />
                    <UridicalFooter
                        footerLinks={config.footerLinks}
                        footerLink={config.footerLink}
                        footerLogo={config.footerLogo}
                        phones={config.phones}
                    />
                </>
            }
        </>
    );
};

export default UridicalsPage;