import styles from '../../styles/CheckForm.module.scss'
import {Image} from "../../interfaces/Image";
import {QuestionOutlined} from "@ant-design/icons";
import {Tooltip} from "antd";
import ReactInputMask from "react-input-mask";
import useInput from "../../hooks/useInput";
import useNotification from "../../hooks/useNotification";

interface CheckFormProps{
    image:Image
}

const CheckForm = ({image}:CheckFormProps) => {
    const {contextHolder,openNotificationWithIcon} = useNotification()
    const code = useInput()

    const handleSubmitClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        if(!code.value)
        {
            openNotificationWithIcon('error','Ошибка!','Проверьте корректность номера')
            return
        }
        if(code.value.length < 24 || code.value.includes('_'))
        {
            openNotificationWithIcon('error','Ошибка!','Проверьте корректность номера')
            return
        }
        openNotificationWithIcon('success','Готово!','Что-то готово')
    }

    return (
        <>
            {contextHolder}
            <div className={styles.checkForm}>
                <div className={styles.formBlock}>
                    <form className={styles.form}>
                        <header>Проверка подарочного сертификата</header>
                        <div className={styles.inputBlock}>
                            <header>Введите номер подарочного сертификата</header>
                            <ReactInputMask
                                mask={'**** **** **** **** ****'}
                                placeholder={'XXXX XXXX XXXX XXXX XXXX'}
                                onChange={code.onChange}
                            />
                            <span
                                className={styles.question}>
                            <Tooltip
                                placement={'top'}
                                title={'какая-то подсказка'}>
                                <QuestionOutlined />
                            </Tooltip>
                        </span>
                        </div>
                        <div className={styles.successBlock}>
                            <div>captcha</div>
                            <button onClick={handleSubmitClick}>Проверить сертификат</button>
                        </div>
                    </form>
                    <img
                        className={styles.image}
                        src={image.url}
                        alt={image.alt}
                        title={image.title}/>
                </div>
                <p>
                    С полным положением об обращении Подарочных сертификатов ООО "Евроторг" можно ознакомиться <a href={'#'}>здесь</a>
                </p>
            </div>
        </>
    );
};

export default CheckForm;