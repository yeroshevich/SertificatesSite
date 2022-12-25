import {PhisicalPage} from "../../interfaces/PhisicalPageConfig";
import PhisicalHeader from "../../components/PhisicalHeader";
import {PhisicalPageProps} from "../Phisicals";
import PhisicalFooter from "../../components/PhisicalFooter";
import BuyingSertificateForm from "../../components/buingSertificate/BuyingSertificateForm";


export async function getStaticProps(){
    const config:PhisicalPage = {
        idConfig:0,
        config:{
            uridicalLink:{link:'#',title:'Для юридических лиц'},
            logo:{url:'./logo_green.png',alt:'evrooptLogo',title:'logo',href:'/'},
            links:[
                // {link:'/',title:'Чем полезен'},
                // {link:'/',title:'Клиенты'},
                // {link:'/',title:'Вопрос-ответ'}
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

const BuyingSertificatesPage = ({config}:PhisicalPageProps) => {
    return (
        <div>
            <PhisicalHeader
                uridicalLink={config.config.uridicalLink}
                logo={config.config.logo}
                links={config.config.links}
            />
            <BuyingSertificateForm/>
            <PhisicalFooter
                links={config.config.footerLinks}
            />
        </div>
    );
};

export default BuyingSertificatesPage;