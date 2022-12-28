import React from 'react';
import {MinusOutlined} from "@ant-design/icons";
import styles from '../styles/PlusIcon.module.scss'
import {PlusIconProps} from "./PlusIcon";

const MinusIcon = ({onClick}:PlusIconProps) => {
    return (
        <div className={styles.iconMinus} onClick={onClick}>
            <MinusOutlined/>
        </div>
    );
};

export default MinusIcon;