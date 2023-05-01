import React from 'react';
import {MinusOutlined} from "@ant-design/icons";
import styles from '../plus/PlusIcon.module.scss'
import {PlusIconProps} from "../plus/PlusIcon";

const MinusIcon = ({onClick}:PlusIconProps) => {
    return (
        <div className={styles.iconMinus} onClick={onClick}>
            <MinusOutlined/>
        </div>
    );
};

export default MinusIcon;