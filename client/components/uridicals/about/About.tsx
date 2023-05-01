import {ContentPair} from "../../../interfaces/ContentPair";
import styles from './About.module.scss';

interface AboutProps{
    content:{header:string,content:Array<ContentPair>}
}

const About = ({content}:AboutProps) => {
    return (
        <div className={styles.content}>
            <header>{content.header}</header>
            <div className={styles.contentGrid}>
                {
                    content.content.map((info,index)=>
                    <div key={index} className={styles.block}>
                        <div className={styles.index}>{index+1}</div>
                        <div className={styles.info}>
                            <div className={styles.header}>{info.title} <div className={styles.smallHead}>{info.description}</div></div>
                            <div className={styles.description}>{info.underDescription}</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default About;