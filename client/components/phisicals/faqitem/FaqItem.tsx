import {FAQ} from "../../../interfaces/FAQ";
import styles from './FaqItem.module.scss'
import {useState} from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface FaqItemProps{
    faq:FAQ
}

const FaqItem = ({faq}:FaqItemProps) => {
    const [isDropped,setIsDropped] = useState(false)

    const handleFaqItemClick = ()=>{
        setIsDropped(prev=>!prev)
    }
    const handleOutSideClick = ()=>{
        setIsDropped(false)
    }

    return (
        <OutsideClickHandler onOutsideClick={handleOutSideClick}>

            <div className={styles.faqBlock +' '+(isDropped?styles.droppedContent:' ')} onClick={handleFaqItemClick}>
                <div  className={styles.content+' '+(isDropped?styles.visible:styles.hidden)}>
                    <div>
                        {faq.title}
                        <img src="../Arrow 2.png" alt="arrow"/>
                    </div>
                </div>
                {
                    isDropped &&

                    <div className={styles.dropped +' '+styles.content+' '+styles.innerContent+' '+(!faq.img.url || !faq.content ?styles.singleContent :styles.doubleContent)}>
                        {
                            faq.img.url &&
                            <div>
                                <img src={faq.img.url} alt={faq.img.alt} title={faq.img.title}/>
                            </div>
                        }
                        {
                            faq.content &&
                            <div className={styles.text}>
                                {faq.content}
                            </div>
                        }
                    </div>
                }
            </div>
        </OutsideClickHandler>
    );
};

export default FaqItem;