import {Link} from "./Link";
import {Logo} from "./Logo";
import {Image} from "./Image";
import {HeadLink} from "./HeadLink";

export interface CheckFormPage{
    idConfig:number,
    config:CheckFormPageConfig,
    userId:number,
    pageId:number
}
export interface CheckFormPageConfig{
    head:Array<HeadLink>,
    title:string,
    uridicalLink:Link,
    logo:Logo,
    links:Array<Link>,
    header:string,
    description:Array<string>,
    formImage:Image,
    footerLinks:Array<Link>,
    footerLogo:Logo
}