import useInput from "../../../hooks/useInput";
import styles from './AddUserConstruct.module.scss';
import useNotification from "../../../hooks/useNotification";
import {serverRequest} from "../../../app/http/serverRequest";

const AddUserConstruct = () => {
    const {contextHolder,openNotificationWithIcon} = useNotification()

    const username = useInput()
    const password = useInput()
    
    const handleSend = async()=>{
        if(!username.value)
        {
            openNotificationWithIcon('error','Ошибка','Имя пользователя заполнено некорректно')
            return
        }
        if(!password.value)
        {
            openNotificationWithIcon('error','Ошибка','Пароль заполнен некорректно')
            return
        }
        try{
            await serverRequest.post('/signup',{username:username.value,password:password.value})
            openNotificationWithIcon('success','Готово','Пользователь добавлен')
        }catch (e)
        {
            openNotificationWithIcon('error','Ошибка',`${e}`)
        }
        username.value = ''
        password.value=''
    }
    
    
    return (
       <>
           {contextHolder}
           <div className={styles.form}>
               <div>
                   <div className={styles.inputBlock}>
                       <div>username</div>
                       <input type="text" onChange={username.onChange} value={username.value}/>
                   </div>
                   <div  className={styles.inputBlock}>
                       <div>password</div>
                       <input type="text" onChange={password.onChange} value={password.value}/>
                   </div>
               </div>
               <button onClick={handleSend}>Добавить</button>
           </div>
       </>
    );
};

export default AddUserConstruct;