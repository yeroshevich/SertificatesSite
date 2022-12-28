import React, {ReactNode} from 'react';
import styles from "../../styles/Buttons.module.scss";
import {Button} from "antd";
import {CloseOutlined, SaveOutlined} from "@ant-design/icons";

interface ButtonsProps{
    children:ReactNode,
    save:()=>void,
    cancel:()=>void
}

const Buttons = ({children,save,cancel}:ButtonsProps) => {
    return (
        <div className={styles.buttons}>
            <Button className={styles.saveButton} icon={<SaveOutlined />} >
                Сохранить конфигурацию
            </Button>
            <Button className={styles.cancelButton} icon={<CloseOutlined />} >
                Отменить изменения
            </Button>
            {children}
        </div>
    );
};

export default Buttons;