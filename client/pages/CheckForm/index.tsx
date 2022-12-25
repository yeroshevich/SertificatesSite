import CheckForm from "../../components/checkpage/CheckForm";
import {CheckFormPage} from "../../interfaces/CheckFormPageConfig";
import Head from "next/head";
import PhisicalHeader from "../../components/PhisicalHeader";
import {URIDICALPAGE_PATH} from "../../app/CONSTS";
import PhisicalFooter from "../../components/PhisicalFooter";

import styles from '../../styles/CheckFormPage.module.scss'

export async function getStaticProps(){
    const config:CheckFormPage = {
        idConfig:0,
        pageId:0,
        userId:0,
        config:{
            head:[

            ],
            title:'Страница',
            header:'Подарочный сертификат',
            uridicalLink:{link:URIDICALPAGE_PATH,title:'Для юридических лиц'},
            logo:{url:'./logo_green.png',alt:'evrooptLogo',title:'logo',href:'/'},
            links:[
            ],
            description:[
                'Подарочные карты номинала 10, 15, 20, 25, 30, 50, 100 руб. доступны на кассах магазинов Евроопт и Хит!',
                'Обаладатели сертификатов могут использовать из сразу же с момента получения в любом магазине «Евроопт» и «Хит!» по всей Беларуси.' +
                ' Сертификат действителен в течение 3-х месяцев с момента приобретения.',
                'При оплате покупки с использованием подарочного сертификата «Евроопт» можно воспользоваться бонусной картой «Е-плюс» для получения скидки на товары',
            ],
            formImage:{url:'./Rectangle 7.png',title:'rect 7'},
            footerLinks:[
                {link:'#',title:'Facebook'},
                {link:'#',title:'Вконтакте'},
                {link:'#',title:'Instagram'},
                {link:'#',title:'Youtube'},
                {link:'#',title:'Одноклассники'},
            ]

        }
    }

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
                <PhisicalFooter links={config.config.footerLinks}/>
            </>
        </>
    );
};

export default CheckFormPage;