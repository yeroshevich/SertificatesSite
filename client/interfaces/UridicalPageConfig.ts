import {Link} from "./Link";
import {Logo} from "./Logo";
import {ContentPair} from "./ContentPair";
import {Image} from "./Image";
import {HeadLink} from "./HeadLink";

export interface UridicalPage{
    idConfig:number,
    pageId:number,
    userId:number,
    config:UridicalPageConfig
}
export interface UridicalPageConfig{
    head:Array<HeadLink>,
    title:string,
    uridicalLink:Link,
    logo:Logo,
    links:Array<Link>,
    bigImage:Image,
    firstContent:ContentPair,
    secondContent:{header:string,content:Array<ContentPair>},
    thirtContent:{header:string,image:Image},
    fourthContent:{header:string,descriptions:Array<string>,images:Array<Image>},
    fivesContent:{image:Image,content:ContentPair},
    footerLogo:Logo,
    footerLinks:Array<Link>,
    footerLink:Link,
    phones:Array<string>
}