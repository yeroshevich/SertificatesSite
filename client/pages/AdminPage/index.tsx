import styles from '../../styles/ConstructorPage.module.scss';
import useInput from "../../hooks/useInput";
import { Input } from 'antd';
import {serverRequest} from "../../app/http/serverRequest";


const AdminPage = () => {

    const username = useInput()
    const password = useInput()

    const handleSubmit = async()=>{
        const res = await serverRequest.post('/login',{username:'admin',password:'192929129129admin'})
        console.log(res)
    }


    return (
        <>
         <div className={styles.form}>
             <header>Форма авторизации</header>
             <div className={styles.inputs}>
                 <div>
                     <input type="text" value={username.value} onChange={username.onChange}/>
                 </div>
                 <div>
                     <Input.Password placeholder="input password" value={password.value} onChange={password.onChange}/>
                 </div>
                 <div>
                     <button onClick={handleSubmit}>Авторизоваться</button>
                 </div>
             </div>
         </div>
        </>
    );
};

export default AdminPage;