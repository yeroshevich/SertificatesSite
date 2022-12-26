import {Link} from "./Link";
import {Image} from "./Image";
import {ContentPair} from "./ContentPair";
import {Address} from "./Address";
import {FAQ} from "./FAQ";
import {GeometryCoordinates} from "./GeometryCoordinates";
import {Logo} from "./Logo";
import {HeadLink} from "./HeadLink";

export interface PhisicalPage{
    idConfig:number,
    config:PhisicalPageConfig,
    userId:number,
    pageId:number
}
export interface PhisicalPageConfig{
    head:Array<HeadLink>,
    title:string,
    uridicalLink:Link,
    logo:Logo,
    links:Array<Link>,
    content:Array<ContentPair>,
    rectImage:Image,
    smallImage:Image,
    carousel:Array<Image>,
    addresses:Array<GeometryCoordinates>,
    faq:Array<FAQ>,
    footerLinks:Array<Link>,
    footerLogo:Logo
}