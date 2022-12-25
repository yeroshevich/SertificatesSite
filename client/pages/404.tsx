import React from 'react';
import styles from '../styles/ErrorPage.module.scss'

const Error404 = () => {
    return (
        <div className={styles.errorBlock}>
            <header>
                404 Страница не найдена
                <div>
                    <a href="/">На главную</a>
                </div>
            </header>

        </div>
    );
};

export default Error404;