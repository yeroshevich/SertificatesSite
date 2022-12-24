import styles from '../../styles/Advices.module.scss'

const Advices = () => {
    return (
        <div className={styles.adviceContainer}>
            <header>
                <div className={styles.smallHeader}>
                    Удобный и полезный подарок
                </div>
                <div className={styles.bigHeader}>
                    ПОДАРОЧНЫЙ СЕРТИФИКАТ в «ЕВРООПТ» И «ХИТ»!
                </div>
            </header>
            <div className={styles.grid}>
                <div className={styles.gridCol}>
                    <div>
                        <img src="./surprise 1.png" alt=""/>
                        <div>Легко приобрести</div>
                    </div>
                    <div>
                        <img src="./security 1.png" alt=""/>
                        <div>Имеет высокую степень защиты</div>
                    </div>
                    <div>
                        <img src="./time 1.png" alt=""/>
                        <div>Срок действия с момента покупки - 90 дней</div>
                    </div>
                    <div>
                        <img src="./surprise 2.png" alt=""/>
                        <div>При оплате покупок можно использовать бонусную карту «Еплюс»</div>
                    </div>
                </div>
                <div className={styles.gridCol}>
                    <div>
                        <img src="./surprise 3.png" alt=""/>
                        <div>Просто использовать</div>
                    </div>
                    <div>
                        <img src="./card 1.png" alt=""/>
                        <div>Является универсальным платёжным средством</div>
                    </div>
                    <div>
                        <img src="./shopping-cart 1.png" alt=""/>
                        <div>Сумма сертификата можно дробить на несколько покупок</div>
                    </div>
                    <div>
                        <img src="./card 2.png" alt=""/>
                        <div>Можно использовать несколько подарочных сертификатов для оплаты одной покупки</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advices;