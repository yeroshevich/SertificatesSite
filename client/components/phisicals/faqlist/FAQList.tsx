import styles from './FaqList.module.scss'
import {FAQ} from "../../../interfaces/FAQ";
import FaqItem from "../faqitem/FaqItem";

interface FaqListProps{
    faqs:Array<FAQ>
}

const FaqList = ({faqs}:FaqListProps) => {
    return (
        <div className={styles.listBlock}>
            <header className={styles.content}>FAQ</header>
            <div className={styles.list}>
                {
                    faqs.map((faq,index)=>
                    <FaqItem faq={faq} key={index}/>)
                }
            </div>
        </div>
    );
};

export default FaqList;