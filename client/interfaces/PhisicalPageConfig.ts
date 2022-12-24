import {Link} from "./Link";
import {Image} from "./Image";
import {ContentPair} from "./ContentPair";
import {Address} from "./Address";
import {FAQ} from "./FAQ";
import {GeometryCoordinates} from "./GeometryCoordinates";

export interface PhisicalPage{
    idConfig:number,
    config:PhisicalPageConfig,
    userId:number,
    pageId:number
}
export interface PhisicalPageConfig{
    uridicalLink:Link,
    logo:Image,
    links:Array<Link>,
    content:Array<ContentPair>,
    rectImage:Image,
    smallImage:Image,
    carousel:Array<Image>,
    addresses:Array<GeometryCoordinates>,
    faq:Array<FAQ>,
    footerLinks:Array<Link>
}