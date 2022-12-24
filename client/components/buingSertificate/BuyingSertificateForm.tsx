import React, {ChangeEvent, MouseEventHandler, useState} from 'react';
import styles from '../../styles/BuyingSertificateForm.module.scss'
import ReactInputMask from "react-input-mask";
import {Checkbox} from "antd";
import useInput from "../../hooks/useInput";
import useNotification from "../../hooks/useNotification";
import {CheckboxChangeEvent} from "antd/es/checkbox";

const BuyingSertificateForm = () => {
    const [isAgree,setIsAgree] = useState(false)
    const {openNotificationWithIcon,contextHolder} = useNotification()

    const naming = useInput()
    const name = useInput()
    const surname = useInput()
    const phone = useInput()
    const email = useInput()
    const commentary = useInput()

    const handleSubmitClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        if(!isAgree){
            openNotificationWithIcon('error','Необходимо принять соглашение','да')
            return
        }
        openNotificationWithIcon('success','Что-то произошло','да')
    }
    const handleCheck = (e:CheckboxChangeEvent)=>{
        setIsAgree(e.target.checked)
    }

    return (
        <>
            {contextHolder}
            <div className={styles.content}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        Контактные данные
                    </header>
                    <form className={styles.form}>
                        <div className={styles.inputBlock}>
                            <input type="text" placeholder={' '}/>
                            <label className={styles.placeholder}>Наименование Юридического лица <span></span></label>
                        </div>
                        <div  className={styles.inputBlock}>
                            <input type="text" placeholder={' '}/>
                            <label className={styles.placeholder}>Имя <span></span></label>
                        </div>
                        <div  className={styles.inputBlock}>
                            <input type="text" placeholder={' '}/>
                            <label className={styles.placeholder}>Фамилия <span></span></label>
                        </div>
                        <div  className={styles.inputBlock}>
                            <ReactInputMask
                                mask={'+375 (99) 999-99-99'}
                                placeholder={' '}
                            />
                            <label className={styles.placeholder}>Телефон <span></span></label>
                        </div>
                        <div  className={styles.inputBlock}>
                            <input type="text" placeholder={' '}/>
                            <label className={styles.placeholder}>E-mail <span></span></label>
                        </div>
                        <div  className={styles.inputBlock}>
                            <textarea  placeholder={' '}/>
                            <label className={styles.placeholder}>Комментарий</label>
                        </div>
                        <div className={styles.agrees}>
                        <span >
                            <Checkbox className={styles.checkbox} onChange={handleCheck}/>
                            Нажимая кнопку "Отправить", я принимаю условия пользовательского соглашения и даю согласие на обработку моих персональных
                            данных на условия и для целей, определенных в Согласии на обработку персональных данных.
                            <span className={styles.redCross}>*</span>
                        </span>
                        </div>
                        <button onClick={handleSubmitClick}>Отправить</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuyingSertificateForm;