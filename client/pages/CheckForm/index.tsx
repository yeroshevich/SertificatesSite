import CheckForm from "../../components/checkpage/CheckForm";
import {CheckFormPage} from "../../interfaces/CheckFormPageConfig";
import Head from "next/head";
import PhisicalHeader from "../../components/PhisicalHeader";
import PhisicalFooter from "../../components/PhisicalFooter";
import styles from '../../styles/CheckFormPage.module.scss'
import {serverRequest} from "../../app/http/serverRequest";
import defaultConfiguration from "../../app/defaultConfiguration";

export async function getStaticProps(){

    const {getCheckFormPageDefaultConfig,saveConfig} = defaultConfiguration()
    await saveConfig(getCheckFormPageDefaultConfig().config)

    const config = (await serverRequest.get('/configs/checkform')).data
    config.config = JSON.parse(config.config)

    return {
        props:{
            config
        }
    }
}
interface CheckFormPageProps{
    config:CheckFormPage
}
const CheckFormPage = ({config}:CheckFormPageProps) => {
    return (
        <>
            <Head>
                <title>{config.config.title}</title>
                {
                    config.config.head.map((link,index)=>
                        <link key={index} rel={link.rel} href={link.href}/>
                    )
                }
            </Head>
            <>
                <PhisicalHeader logo={config.config.logo} links={config.config.links} uridicalLink={config.config.uridicalLink}/>
                <div className={styles.content}>
                    <header>
                        {config.config.header}
                    </header>
                    <div className={styles.descriptions}>
                        {config.config.description.map((desc,index)=><div key={index} className={styles.description}>{desc}</div>)}
                    </div>
                    <CheckForm image={config.config.formImage}/>
                </div>
                <PhisicalFooter links={config.config.footerLinks} logo={config.config.footerLogo}/>
            </>
        </>
    );
};

export default CheckFormPage;