import styles from '../../styles/AdminPage.module.scss';
import useInput from "../../hooks/useInput";
import { Input } from 'antd';
import {serverRequest} from "../../app/http/serverRequest";
import {AuthUser} from "../../interfaces/AuthUser";

export async function getStaticProps(){
    try{
        const res= (await serverRequest.post('/auth')).data
        console.log(res)
        // if(res.isAuthorized)
        //     return{
        //         redirect:{
        //             destination:'/'
        //         }
        //     }
    }catch (e){
        console.log(e)
    }
    return {
        props:{}
    }

}
const AdminPage = () => {

    const username = useInput()
    const password = useInput()

    const handleSubmit = async()=>{
        const res = await serverRequest.post('/login',{username:'admin',password:'192929129129admin'})
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