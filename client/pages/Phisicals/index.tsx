import PhisicalHeader from "../../components/PhisicalHeader";
import PhisicalContent from "../../components/PhisicalContent";
import PhisicalFooter from "../../components/PhisicalFooter";
import {PhisicalPage} from "../../interfaces/PhisicalPageConfig";
import TopScroll from "../../components/TopScroll";
import {serverRequest} from "../../app/http/serverRequest";
import Head from "next/head";
import defaultConfiguration from "../../app/defaultConfiguration";

export async function getStaticProps(){

    const config = (await serverRequest.get('/configs/physical')).data
    config.config = JSON.parse(config.config)

    return {
        props:{
            config
        }
    }
}
export interface PhisicalPageProps{
    config:PhisicalPage
}
const PhisicalsPage = ({config}:PhisicalPageProps) => {



    return (
        <>
            <Head>
                {config.config.head.map((link,index)=><link rel={link.rel} href={link.href} key={index}/>)}
                <title>{config.config.title}</title>
            </Head>
            <PhisicalHeader
                uridicalLink={config.config.uridicalLink}
                logo={config.config.logo}
                links={config.config.links}
            />
            <PhisicalContent
                content={config.config.content}
                rectImage={config.config.rectImage}
                smallImage={config.config.smallImage}
                carousel={config.config.carousel}
                addresses={config.config.addresses}
                faq={config.config.faq}
            />
            <PhisicalFooter
                links={config.config.footerLinks}
                logo={config.config.footerLogo}
            />
            <TopScroll/>
        </>
    );
};

export default PhisicalsPage;