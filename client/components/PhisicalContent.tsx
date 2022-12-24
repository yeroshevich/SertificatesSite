import styles from '../styles/PhisicalContent.module.scss'
import {ContentPair} from "../interfaces/ContentPair";
import {useMemo} from "react";
import {Image} from "../interfaces/Image";
import Advices from "./phisicals/Advices";
import ImageSlider from "./phisicals/ImageSlider";
import BuyingMap from "./phisicals/BuyingMap";
import {Address} from "../interfaces/Address";
import {GeometryCoordinates} from "../interfaces/GeometryCoordinates";
import {FAQ} from "../interfaces/FAQ";
import FaqList from "./phisicals/FAQList";

export interface PhisicalContentProps{
    content:Array<ContentPair>,
    rectImage:Image,
    smallImage:Image,
    carousel:Array<Image>,
    addresses:Array<GeometryCoordinates>,
    faq:Array<FAQ>
}

const PhisicalContent = ({content,rectImage,smallImage,carousel,addresses,faq}:PhisicalContentProps) => {

    const {firstContent,secondContent}  = useMemo(()=>{
        return {
            firstContent:content[0],
            secondContent:content[1]
        }
    },content)

    return (
        <>
            <div className={styles.content}>
                <div className={styles.text+' '+styles.firstContent}>
                    <div className={styles.title}>{firstContent.title}</div>
                    <div>
                        <div className={styles.description}>
                            {firstContent.description}
                        </div>
                        <div className={styles.description}>
                            {firstContent.underDescription}
                            <div className={styles.buyButton}>
                                <button>Купить сертификат</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.rectImage}>
                    <img src={rectImage.url} alt={rectImage.alt}/>
                </div>
                <div className={styles.secondContent}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            {secondContent.title}
                        </div>
                        <div className={styles.description}>
                            {secondContent.description}
                        </div>
                        <div className={styles.buyButton}>
                            <button>Купить сертификат</button>
                        </div>
                    </div>
                    <div className={styles.smallImage}>
                        <img src={smallImage.url} alt={smallImage.alt?smallImage.alt:''} title={smallImage.title} />

                    </div>
                </div>

            </div>
            <div className={styles.anotherContent}>
                <Advices/>
            </div>
            <div  className={styles.anotherContent}>
                <ImageSlider slides={carousel}/>
            </div>
            <div  className={styles.anotherContent + ' '+styles.text}>
                <BuyingMap addresses={addresses}/>
            </div>
            <div className={styles.anotherContent}>
                <FaqList faqs={faq}/>
            </div>
        </>
    );
};

export default PhisicalContent;