import {SaveConfig} from "../interfaces/SaveConfig";
import {serverRequest} from "./http/serverRequest";
import {PHISICALPAGE_PATH, URIDICALPAGE_PATH} from "./CONSTS";
import {PhisicalPageConfig} from "../interfaces/PhisicalPageConfig";
import {BuyingPagePageConfig} from "../interfaces/BuyingPageConfig";
import {UridicalPageConfig} from "../interfaces/UridicalPageConfig";
import {CheckFormPageConfig} from "../interfaces/CheckFormPageConfig";

export default function defaultConfiguration()
{
    const getBuyingPageDefaultConfig = ()=>{
        const config:SaveConfig = {
            config:{
                head:[],
                title:'',
                uridicalLink:{link:'#',title:'Для юридических лиц'},
                logo:{url:'./logo_green.png',alt:'evrooptLogo',title:'logo',href:'/'},
                links:[
                ],
                footerLinks:[
                    {link:'#',title:'./Facebook.png'},
                    {link:'#',title:'./Вконтакте.png'},
                    {link:'#',title:'./Instagram.png'},
                    {link:'#',title:'./Youtube.png'},
                    {link:'#',title:'./Одноклассники.png'},
                ],
                footerLogo:{url:'./logo_green.png',alt:'evrooptLogoFooter',title:'footerLogo'}
            } as BuyingPagePageConfig,
            page:'buyingpage'
        }
        return {config}
    }
    const getPhysicalPageDefaultConfig = ()=>{
        const config:SaveConfig = {
            config:{
                head:[],
                title:'',
                uridicalLink:{link:URIDICALPAGE_PATH,title:'Для юридических лиц'},
                logo:{url:'./logo_green.png',alt:'evrooptLogo',title:'logo',href:'/Phisicals'},
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
                    {link:'#',title:'./Facebook.png'},
                    {link:'#',title:'./Вконтакте.png'},
                    {link:'#',title:'./Instagram.png'},
                    {link:'#',title:'./Youtube.png'},
                    {link:'#',title:'./Одноклассники.png'},
                ],
                footerLogo:{url:'./logo_green.png',alt:'evrooptLogoFooter',title:'footerLogo'}
            } as PhisicalPageConfig,
            page:'physical'
        }
        return {config}
    }
    const getCheckFormPageDefaultConfig = ()=>{
        const config:SaveConfig = {
            config:{
                head:[],
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
                    {link:'#',title:'./Facebook.png'},
                    {link:'#',title:'./Вконтакте.png'},
                    {link:'#',title:'./Instagram.png'},
                    {link:'#',title:'./Youtube.png'},
                    {link:'#',title:'./Одноклассники.png'},
                ],
                footerLogo:{url:'./logo_green.png',alt:'evrooptLogoFooter',title:'footerLogo'}
            } as CheckFormPageConfig,
            page:'checkform'
        }
        return {config}
    }
    const getUridicalPageDefaultConfig = ()=>{
        const config:SaveConfig= {
            config:{
                head:[],
                title:'uridical',
                uridicalLink:{title:'Для физических лиц',link:PHISICALPAGE_PATH},
                logo:{url:'./logo_green.png',alt:'logo',title:'evrooptLogo'},
                links:[
                    {title:'Как получить сертификат',link:'',htmlElementId:'#stepsBlock'},
                    {title:'Памятка',link:'',htmlElementId:'#memoryUser'},
                ],
                bigImage:{url:'./Rectangle 5.png'},
                firstContent:{
                    title:'Подарочный сертификат',
                    description:'Подарочный сертификат на покупку продуктов и товаров в любом магазине «Евроопт» и «Хит!» - это полезный подарок, который точно понравится каждому! По любому поводу, в любое время!',
                    underDescription:'Подарочный сертификат - это подарок, полный приятных сюрпризов'
                },
                secondContent:{
                    header:'ЧТО ТАКОЕ ПОДАРОЧНЫЙ СЕРТИФИКАТ «ЕВРООПТ»',
                    content:[
                        {title:'Универсальный',
                            description:'подарок',
                            underDescription:'Из широкого ассортимента товаров магазинов «Евроопт» и «Хит!» владелец сертификата выберет то, что ему действительно необходимо.'},
                        {title:'Удобный',
                            description:'подарок',
                            underDescription:'Вы можете выбрать удобный для вас номинал сертификата: 10 рублей, 15 рублей, 20 рублей, 25 рублей, 30 рублей или 50 рублей.'},
                        {title:'Практичный',
                            description:'подарок',
                        underDescription:'Обладатели сертификатов могут использовать их сразу же с момента получения в любом магазине «Евроопт» и «Хит!» по всей Беларуси.'}
                    ]
                },
                thirtContent:{
                    header:'КАК ПОЛУЧИТЬ СЕРТИФИКАТ ЮРИДИЧЕСКОМУ ЛИЦУ',image:{url:'./Rectangle 6.png'}
                },
                fourthContent:{
                    header:'КЛИЕНТЫ',
                    descriptions:[
                        'Наши подарочные сертификаты служат прекрасным подарком уже более чем в 1000 Организаций',
                        'Мы направлены на развитие долгосрочных отношений с партнерами, поэтому во взаимовыгодном сотрудничестве стремимся у укруплению доверия, основанному на честном и ответственном отношении к исполнению своих обязательств.'
                    ],
                    images:[
                        {url:'./Rectangle 16.png'},
                        {url:'./Rectangle 16.png'},
                        {url:'./Rectangle 16.png'},
                        {url:'./Rectangle 16.png'},
                        {url:'./Rectangle 16.png'},
                        {url:'./Rectangle 16.png'},
                        {url:'./Rectangle 16.png'},
                        {url:'./Rectangle 16.png'},
                    ]
                },
                fivesContent:{
                    image:{url:'./Rectangle 8.png'},
                    content:{
                        title:'ПАМЯТКА ВЛАДЕЛЬЦУ ПОДАРОЧНОГО СЕРТИФИКАТА',
                        description:'Сертификат действителен в течение 3-х месяцев с момента приобретения. Подробную информацию о подарочных сертификатах можно узнать здесь.',
                        underDescription:'При оплате покупки с использованием сертификата «Евроопт» можно воспользоватсья дисконтной картой «Е-плюс» для получения скидки на товары.'
                    }
                },
                footerLogo:{
                    url:'./logo_green.png'
                },
                footerLinks:[
                    {link:'#',title:'./Facebook.png'},
                    {link:'#',title:'./Вконтакте.png'},
                    {link:'#',title:'./Instagram.png'},
                ],
                footerLink:{title:'podari_sertifikat@eurotorg.by',link:'podari_sertifikat@eurotorg.by'},
                phones:[
                    '+375 (44) 587-91-01',
                    '+375 (44) 529-14-44'
                ]
            } as UridicalPageConfig,
            page:'uridical'
        }
        return {config}
    }
    const saveConfig = async(config:SaveConfig)=>{
        const saveRes = await serverRequest.patch('/configs',config)
        return saveRes.data
    }
    const fetchConfig = async(page:string)=>{
        const res = await serverRequest.get(`/configs/${page}`)
        return JSON.parse(res.data.config)
    }

    return {getBuyingPageDefaultConfig,getPhysicalPageDefaultConfig,getCheckFormPageDefaultConfig,getUridicalPageDefaultConfig,saveConfig,fetchConfig}
}