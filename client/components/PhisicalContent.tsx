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
import useRedirect from "../hooks/useRedirect";
import {BUYPAGE_PATH} from "../app/CONSTS";

export interface PhisicalContentProps{
    content:Array<ContentPair>,
    rectImage:Image,
    smallImage:Image,
    carousel:Array<Image>,
    addresses:Array<GeometryCoordinates>,
    faq:Array<FAQ>
}

const PhisicalContent = ({content,rectImage,smallImage,carousel,addresses,faq}:PhisicalContentProps) => {

    const routeTo = useRedirect()

    const handleBuyButtonClick = ()=>{
        routeTo(BUYPAGE_PATH)
    }

    const {firstContent,secondContent}  = useMemo(()=>{
        return {
            firstContent:content[0],
            secondContent:content[1]
        }
    },content)

    return (
        <>
            <div className={styles.contentGrid}>
                <div className={styles.text+' '+styles.firstContent}>
                    <div className={styles.title}>{firstContent.title}</div>
                    <div>
                        <div className={styles.description}>
                            {firstContent.description}
                        </div>
                        <div className={styles.description}>
                            {firstContent.underDescription}
                            <div className={styles.buyButton}>
                                <button onClick={handleBuyButtonClick}>Купить сертификат</button>
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
                            <button  onClick={handleBuyButtonClick}>Купить сертификат</button>
                        </div>
                    </div>
                    <div className={styles.smallImage}>
                        <img src={smallImage.url} alt={smallImage.alt?smallImage.alt:''} title={smallImage.title} />

                    </div>
                </div>

            </div>
            <div id={'polezen'} className={styles.anotherContent}>
                <Advices/>
            </div>
            <div  className={styles.anotherContent}>
                <ImageSlider slides={carousel}/>
            </div>
            <div id={'clientBlock'}  className={styles.anotherContent + ' '+styles.text}>
                <BuyingMap addresses={addresses}/>
            </div>
            <div id={'faqBlock'} className={styles.anotherContent}>
                <FaqList faqs={faq}/>
            </div>
        </>
    );
};

export default PhisicalContent;