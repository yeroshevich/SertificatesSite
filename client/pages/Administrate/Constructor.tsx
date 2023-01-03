import styles from '../../styles/Constructor.module.scss'
import {ReactNode, useState} from "react";
import PhysicalPageContruct from "../../components/construct/PhysicalPageContruct";
import AddUserConstruct from "../../components/construct/AddUserConstruct";
import UridicalPageConstruct from "../../components/construct/UridicalPageConstruct";
import CheckFormConstruct from "../../components/construct/CheckFormConstruct";
import BackFormConstruct from "../../components/construct/BackFormConstruct";
import {ConfigContext} from "../../app/context";

const Constructor = () => {
    const [currentConstruct,setCurrentConstruct] = useState<ReactNode>(<ChooseContruct/>)
    const [config,setConfig] = useState<any>({})

    const handleSetConstruct = (comp:ReactNode)=>{
            setCurrentConstruct(comp)
    }
    const handleCloseConstruct = ()=>{
        setCurrentConstruct(<ChooseContruct/>)
    }

    return (
        <ConfigContext.Provider value={{config,setConfig}}>
            <div className={styles.constructorBlock}>
                <header>
                    <div className={styles.menu}>
                        <div
                            className={styles.item}
                            onClick={()=>handleSetConstruct(<AddUserConstruct/>)}>
                            Добавить пользователя
                        </div>
                        <div
                            onClick={()=>handleSetConstruct(<PhysicalPageContruct/>)}
                            className={styles.item}>
                            Страница физических лиц
                        </div>
                        <div
                            onClick={()=>handleSetConstruct(<UridicalPageConstruct/>)}
                            className={styles.item}>
                            Страница юридических лиц
                        </div>
                        <div
                            onClick={()=>handleSetConstruct(<CheckFormConstruct/>)}
                            className={styles.item}>
                            Страница проверки сертификата
                        </div>
                        <div
                            onClick={()=>handleSetConstruct(<BackFormConstruct/>)}
                            className={styles.item}>
                            Страница формы обратной связи
                            gsdgds
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.item} onClick={handleCloseConstruct}>Закрыть конструктор</div>
                    </div>
                </header>
                <div className={styles.content}>
                    {currentConstruct}
                </div>
            </div>

        </ConfigContext.Provider>

    );
};

const ChooseContruct = ()=>{
    return (
        <>
            <div className={styles.chooseBlock}>
                Выберите пункт меню
            </div>
        </>
    )
}

export default Constructor;