import PhisicalHeader from "../../components/PhisicalHeader";
import PhisicalContent from "../../components/PhisicalContent";
import PhisicalFooter from "../../components/PhisicalFooter";
import {PhisicalPage} from "../../interfaces/PhisicalPageConfig";
import {useEffect} from "react";
import axios from "axios";
import TopScroll from "../../components/TopScroll";
import {URIDICALPAGE_PATH} from "../../app/CONSTS";

export async function getStaticProps(){
    const config:PhisicalPage = {
        idConfig:0,
        config:{
            uridicalLink:{link:URIDICALPAGE_PATH,title:'Для юридических лиц'},
            logo:{url:'./logo_green.png',alt:'evrooptLogo',title:'logo',href:'/'},
            links:[
                {link:'',title:'Чем полезен',htmlElementId:'#polezen'},
                {link:'',title:'Клиенты',htmlElementId:'#clientBlock'},
                {link:'',title:'Вопрос-ответ',htmlElementId:'#faqBlock'}
            ],
            content:[
                {
                    title:'Подарочные сертификаты на покупки в магазинах «Евроопт» и «Хит!»',
                    description:'Подарочный сертификат на покупку продуктов и товаров в любом магазине «Евроопт» и «Хит!» - это полезный подарок, который точно понравится каждому! По любому поводу, в любое время!',
                    underDescription:'Подарочный сертификат - это подарок, полный приятных сюрпризов'
                },
                {
                    title:'ВРЕМЯ ПОЛЕЗНЫХ ПОДАРКОВ!',
                    description:'Подарочный сертификат - подарок, который подойдет и понравистя всем! Не угадывайте с подарком. Подарите выгоду комфортных покупок в «Евроопте»'
                }
            ],
            rectImage:{url:'./Rectangle 1.png',title:'rectImage',alt:'rectImage'},
            smallImage:{url:'./Rectangle 7.png',title:'presentImage',alt:'presentImage'},
            carousel:[
                {url:'./Rectangle 9.png',title:'carouselImg1',alt:'carouselImg1'},
                {url:'./Rectangle 9.png',title:'carouselImg2',alt:'carouselImg2'},
                {url:'./Rectangle 9.png',title:'carouselImg3',alt:'carouselImg3'},
            ],
            addresses:[
                {longitude:53.2332,latitude:27.2332,description:'магазин евроопт'},
                {longitude:53.1032,latitude:27.2000,description:'магазин евроопт'}
            ],
            faq:[
                {title:'Возможно ли отоваривать сертификат не на всю сумму единовременно?',content:'Да'},
                {title:'Как узнать срок действия сертификата?',content:'как-нибудь'},
                {title:'Сколько стоит сертификат?',content:'да'},
                {title:'Где можно отоварить подарочный сертификат?',content:'Подарочный сертификат на покупку продуктов и товаров в любом магазине «Евроопт» и «Хит!» - это полезный подарок, который точно понравится каждому! По любому поводу, в любое время!',url:'./Rectangle 7.png'},
                {title:'Что можно приобрести за подарочный сертификат?',content:'вам - ничего'},
                {title:'Могу ли я передать сертификат другому человеку?',content:'нет'},
            ],
            footerLinks:[
                {link:'#',title:'Facebook'},
                {link:'#',title:'Вконтакте'},
                {link:'#',title:'Instagram'},
                {link:'#',title:'Youtube'},
                {link:'#',title:'Одноклассники'},
            ]
        },
        userId:0,
        pageId:0
    }

    // const config = await axios.get('http://localhost:8080/configs/physical')
    // console.log(config.data)

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
            />
            <TopScroll/>
        </>
    );
};

export default PhisicalsPage;