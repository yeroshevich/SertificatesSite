import UridicalHeader from "../../components/UridicalHeader";
import UridicalFooter from "../../components/UridicalFooter";
import UridicalContent from "../../components/UridicalContent";
import {serverRequest} from "../../app/http/serverRequest";
import {UridicalPage} from "../../interfaces/UridicalPageConfig";
import Head from "next/head";
import defaultConfiguration from "../../app/defaultConfiguration";

export async function getStaticProps(){

    const {getUridicalPageDefaultConfig,saveConfig} = defaultConfiguration()
    await saveConfig(getUridicalPageDefaultConfig().config)
    const config = (await serverRequest.get('/configs/uridical')).data
    config.config = JSON.parse(config.config)
    return {
        props:{
            config
        }
    }
}
interface UridicalsPageProps{
    config:UridicalPage
}

const UridicalsPage = ({config}:UridicalsPageProps) => {
    return (
        <>
            <Head>
                {config.config.head.map((link,index)=> <link key={index} rel={link.rel} href={link.href}/>)}
            </Head>
            <UridicalHeader
                templateProps={{
                    uridicalLink:config.config.uridicalLink,
                    links:config.config.links,
                    logo:config.config.logo
                }}
            />
            <UridicalContent
                firstContent={config.config.firstContent}
                secondContent={config.config.secondContent}
                thirtContent={config.config.thirtContent}
                fourthContent={config.config.fourthContent}
                fivesContent={config.config.fivesContent}
                bigImage={config.config.bigImage}
            />
            <UridicalFooter/>
        </>
    );
};

export default UridicalsPage;