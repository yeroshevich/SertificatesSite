import {HeadLink} from "./HeadLink";
import {Link} from "./Link";
import {Logo} from "./Logo";
import {Image} from "./Image";

export interface BuyingPage{
    idConfig:number,
    config:BuyingPagePageConfig,
    userId:number,
    pageId:number
}
export interface BuyingPagePageConfig{
    head:Array<HeadLink>,
    title:string,
    uridicalLink:Link,
    logo:Logo,
    links:Array<Link>,
    footerLinks:Array<Link>,
    footerLogo:Logo

}
