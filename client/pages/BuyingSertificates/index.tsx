import PhisicalHeader from "../../components/phisicals/header/PhisicalHeader";
import {PhisicalPageProps} from "../Phisicals";
import PhisicalFooter from "../../components/phisicals/footer/PhisicalFooter";
import BuyingSertificateForm from "../../components/buingSertificate/BuyingSertificateForm";
import Head from "next/head";
import useConfiguration from "../../hooks/useConfiguration";
import useRedirect from "../../hooks/useRedirect";
import {useEffect} from "react";
import {BuyingPagePageConfig} from "../../interfaces/BuyingPageConfig";


const BuyingSertificatesPage = () => {
    const {config,fetchConfiguration} = useConfiguration<BuyingPagePageConfig>('buyingpage')
    const routeTo = useRedirect()

    useEffect(()=>{
        try{
            fetchConfiguration()
        } catch (e)
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
                        {config.head.map((link,index)=> <link key={index} rel={link.rel} href={link.href}/>)}
                        <title>{config.title}</title>
                    </Head>
                    <div>
                        <PhisicalHeader
                            uridicalLink={config.uridicalLink}
                            logo={config.logo}
                            links={config.links}
                        />
                        <BuyingSertificateForm/>
                        <PhisicalFooter
                            links={config.footerLinks}
                            logo={config.footerLogo}
                        />
                    </div>
                </>
            }
        </>
    );
};

export default BuyingSertificatesPage;