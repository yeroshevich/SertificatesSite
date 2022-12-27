import styles from '../styles/UridicalContent.module.scss'
import {Image} from "../interfaces/Image";
import {ContentPair} from "../interfaces/ContentPair";
import About from "./uridicals/About";
import Steps from "./uridicals/Steps";
import Clients from "./uridicals/Clients";
import MemoryOwner from "./uridicals/MemoryOwner";

interface UridicalContentProps{
    bigImage:Image,
    firstContent:ContentPair,
    secondContent:{header:string,content:Array<ContentPair>},
    thirtContent:{header:string,image:Image},
    fourthContent:{header:string,descriptions:Array<string>,images:Array<Image>},
    fivesContent:{image:Image,content:ContentPair},
}
const UridicalContent = ({bigImage,firstContent,secondContent,thirtContent,fourthContent,fivesContent}:UridicalContentProps) => {
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
                        <button>Оставить заявку</button>
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