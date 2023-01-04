import React from 'react';
import styles from '../styles/ErrorPage.module.scss'
import useRedirect from "../hooks/useRedirect";

const Error404 = () => {
    const routeTo= useRedirect()

    const handleRouteToMain = ()=>{
        routeTo('/')
    }

    return (
        <div className={styles.errorBlock}>
            <header>
                404 Страница не найдена
                <div>
                    <a href="/" onClick={handleRouteToMain}>На главную</a>
                </div>
            </header>

        </div>
    );
};

export default Error404;