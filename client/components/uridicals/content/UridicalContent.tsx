import styles from './UridicalContent.module.scss'
import {Image} from "../../../interfaces/Image";
import {ContentPair} from "../../../interfaces/ContentPair";
import About from "../about/About";
import Steps from "../steps/Steps";
import Clients from "../clients/Clients";
import MemoryOwner from "../memoryowner/MemoryOwner";
import useRedirect from "../../../hooks/useRedirect";

interface UridicalContentProps{
    bigImage:Image,
    firstContent:ContentPair,
    secondContent:{header:string,content:Array<ContentPair>},
    thirtContent:{header:string,image:Image},
    fourthContent:{header:string,descriptions:Array<string>,images:Array<Image>},
    fivesContent:{image:Image,content:ContentPair},
}
const UridicalContent = ({bigImage,firstContent,secondContent,thirtContent,fourthContent,fivesContent}:UridicalContentProps) => {
    const routeTo = useRedirect()

    const handleNavigateBuyingPage = ()=>{
        routeTo('/BuyingSertificates')
    }

    return (
        <div className={styles.contentBlock}>
            <div className={styles.contentGrid}>
                <img src={bigImage.url} alt=""/>
                <div className={styles.firstContent}>
                    <header>{firstContent.title}</header>
                    <div className={styles.descriptions}>
                        <div className={styles.description}>{firstContent.description}</div>
                        <div className={styles.description}>{firstContent.underDescription}</div>
                    </div>
                    <div  className={styles.sendButton}>
                        <button onClick={handleNavigateBuyingPage}>Оставить заявку</button>
                    </div>
                </div>
            </div>

            <div className={styles.text}>
                <About content={secondContent}/>
            </div>
            <div className={styles.text}>
                <Steps content={thirtContent}/>
            </div>
            <div className={styles.text}>
                <Clients content={fourthContent}/>
            </div>
            <div>
                <MemoryOwner content={fivesContent}/>
            </div>
        </div>
    );
};

export default UridicalContent;