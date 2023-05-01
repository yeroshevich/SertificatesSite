import styles from './MemoryOwner.module.scss'
import {Image} from "../../../interfaces/Image";
import {ContentPair} from "../../../interfaces/ContentPair";
import {useMemo} from "react";

interface MemoryOwnerProps{
    content:{image:Image,content:ContentPair}
}

const MemoryOwner = ({content}:MemoryOwnerProps) => {

    const description = useMemo(()=>{
        const array = content.content.description.split(' ')
        const description =  array.reduce((acc,item,index)=>{
            return index < array.length-1?  acc+' '+item:acc
        },'')
        return {description,lastWord:array[array.length-1]}
    },[])

    return (
        <div className={styles.memoryBlock} id={'memoryUser'}>
                <div className={styles.innerBlock}>
                    <img src={content.image.url} alt=""/>
                    <div className={styles.content}>
                        <header>{content.content.title}</header>
                        <div className={styles.descriptions}>
                            <div className={styles.description}>{description.description} <a href="">{description.lastWord}</a></div>
                            <div  className={styles.description}>{content.content.underDescription}</div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MemoryOwner;