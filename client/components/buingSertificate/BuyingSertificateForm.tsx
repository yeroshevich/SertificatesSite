import React, {ChangeEvent, MouseEventHandler, useEffect, useState} from 'react';
import styles from '../../styles/BuyingSertificateForm.module.scss'
import ReactInputMask from "react-input-mask";
import {Checkbox} from "antd";
import useInput from "../../hooks/useInput";
import useNotification from "../../hooks/useNotification";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import useBuyingFormValidate from "../../app/buyingFormValidate";
import useDebounce from "../../hooks/useDebounce";

const BuyingSertificateForm = () => {
    const [isAgree,setIsAgree] = useState(false)
    const {openNotificationWithIcon,contextHolder} = useNotification()

    const {exception,isValid,validate} = useBuyingFormValidate()

    const orgNaming = useInput()
    const name = useInput()
    const surname = useInput()
    const phone = useInput()
    const email = useInput()
    const commentary = useInput()

    const debounce = useDebounce(validate)

    const handleSubmitClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        if(!isAgree){
            openNotificationWithIcon('error','Необходимо принять соглашение','да')
            return
        }
        if(!isValid)
        {
            openNotificationWithIcon('error','Ошибка!',`${exception}`)
            return
        }
        openNotificationWithIcon('success','Что-то произошло','да')

        //отправка данных куда-то
    }
    const handleCheck = (e:CheckboxChangeEvent)=>{
        setIsAgree(e.target.checked)
    }
    useEffect(()=>{
        debounce(orgNaming.value,
            name.value,
            surname.value,
            phone.value,
            email.value)
    },[name.value,orgNaming.value,surname.value,phone.value,email.value])
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
                            <input type="text" placeholder={' '} onChange={orgNaming.onChange} value={orgNaming.value}/>
                            <label className={styles.placeholder}>Наименование Юридического лица <span></span></label>
                        </div>
                        <div  className={styles.inputBlock}>
                            <input type="text" placeholder={' '} onChange={name.onChange} value={name.value}/>
                            <label className={styles.placeholder}>Имя <span></span></label>
                        </div>
                        <div  className={styles.inputBlock}>
                            <input type="text" placeholder={' '} onChange={surname.onChange} value={surname.value}/>
                            <label className={styles.placeholder}>Фамилия <span></span></label>
                        </div>
                        <div  className={styles.inputBlock}>
                            <ReactInputMask
                                mask={'+375 (99) 999-99-99'}
                                placeholder={' '}
                                onChange={phone.onChange}
                                value={phone.value}
                            />
                            <label className={styles.placeholder}>Телефон <span></span></label>
                        </div>
                        <div  className={styles.inputBlock}>
                            <input type="text" placeholder={' '} onChange={email.onChange} value={email.value}/>
                            <label className={styles.placeholder}>E-mail <span></span></label>
                        </div>
                        <div  className={styles.inputBlock}>
                            <textarea  placeholder={' '} onChange={commentary.onChange} value={commentary.value}/>
                            <label className={styles.placeholder}>Комментарий</label>
                        </div>
                        <div className={styles.agrees}>
                        <span >
                            <Checkbox className={styles.checkbox} onChange={handleCheck}/>
                            Нажимая кнопку «Отправить», я принимаю условия пользовательского соглашения и даю согласие на обработку моих персональных
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