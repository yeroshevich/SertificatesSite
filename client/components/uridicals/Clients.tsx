import styles from '../../styles/Clients.module.scss'
import {Image} from "../../interfaces/Image";

interface ClientsProps{
    content:{header:string,descriptions:Array<string>,images:Array<Image>}
}

const Clients = ({content}:ClientsProps) => {
    return (
        <div className={styles.clients}>
            <header className={styles.header}>{content.header}</header>
            <div className={styles.descriptions}>
                {content.descriptions.map((description,index)=>
                <div key={index} className={styles.description}>
                    {description}
                </div>
                )}
            </div>
            <div className={styles.images}>
                <div className={styles.imageRow}>
                    {content.images.map((image,index)=>{
                            if(index<4)
                                return <img src={image.url} alt={image.alt} title={image.title}/>
                        }
                    )}
                </div>
                <div  className={styles.imageRow}>
                    {content.images.map((image,index)=>{
                            if(index>3)
                                return <img src={image.url} alt={image.alt} title={image.title}/>
                        }
                    )}
                </div>
            </div>
        </div>
    );
};

export default Clients;