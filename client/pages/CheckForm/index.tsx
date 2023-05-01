import CheckForm from "../../components/checkpage/CheckForm";
import Head from "next/head";
import PhisicalHeader from "../../components/phisicals/header/PhisicalHeader";
import PhisicalFooter from "../../components/phisicals/footer/PhisicalFooter";
import styles from './CheckFormPage.module.scss'
import useConfiguration from "../../hooks/useConfiguration";
import {useEffect} from "react";
import useRedirect from "../../hooks/useRedirect";
import {CheckFormPageConfig} from "../../interfaces/CheckFormPageConfig";


const CheckFormPage = () => {
    const {config,fetchConfiguration} = useConfiguration<CheckFormPageConfig>('checkform')
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
                        <title>{config.title}</title>
                        {
                            config.head.map((link,index)=>
                                <link key={index} rel={link.rel} href={link.href}/>
                            )
                        }
                    </Head>
                    <>
                        <PhisicalHeader logo={config.logo} links={config.links} uridicalLink={config.uridicalLink}/>
                        <div className={styles.content}>
                            <header>
                                {config.header}
                            </header>
                            <div className={styles.descriptions}>
                                {config.description.map((desc,index)=><div key={index} className={styles.description}>{desc}</div>)}
                            </div>
                            <CheckForm image={config.formImage} hereLink={config.hereLink}/>
                        </div>
                        <PhisicalFooter links={config.footerLinks} logo={config.footerLogo}/>
                    </>
                </>
            }
        </>
    );
};

export default CheckFormPage;