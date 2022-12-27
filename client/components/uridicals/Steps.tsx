import {Image} from "../../interfaces/Image";
import styles from '../../styles/Steps.module.scss';

interface StepsProps{
    content:{header:string,image:Image}
}

const Steps = ({content}:StepsProps) => {
    return (
        <div className={styles.contentGrid} id={'stepsBlock'}>
            <div className={styles.instruction}>
                <header>четыре простых шага</header>
                <div className={styles.header}>
                    {content.header}
                </div>
                <div className={styles.stepsGrid}>
                    <div>
                        <div className={styles.step}>
                            <img src='./Handshake.png' alt="handshake"/>
                            <div>Заключить договор</div>
                        </div>
                        <div className={styles.step}>
                            <img src="./MasterCard Credit Card.png" alt="mastercard"/>
                            <div>Оплатить подарочные сертификаты удобным способом</div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.step}>
                            <img src="./Laptop E-Mail.png" alt="laptop"/>
                            <div>Заказать необходимое количество сертификатов по номиналам</div>
                        </div>
                        <div className={styles.step}>
                            <img src="./Place Marker.png" alt="marker"/>
                            <div>Выбрать адрес доставки</div>
                        </div>
                    </div>
                </div>
                <button className={styles.sendButton}>ОСТАВИТЬ ЗАЯВКУ</button>
                <div className={styles.footer}>
                    В течении <span>5 дней</span> с момента оплаты вы получите подарочные сертификаты «Евроопт».
                </div>
            </div>
            <div>
                <img className={styles.rightImage} src={content.image.url} alt={content.image.alt} title={content.image.title}/>
            </div>
        </div>
    );
};

export default Steps;