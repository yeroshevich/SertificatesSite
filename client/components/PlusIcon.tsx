import {PlusOutlined} from "@ant-design/icons";
import styles from '../styles/PlusIcon.module.scss';

export interface PlusIconProps{
    onClick:()=>void
}
const PlusIcon = ({onClick}:PlusIconProps) => {
    return (
        <div onClick={onClick} className={styles.iconPlus}>
            <PlusOutlined/>
        </div>
    );
};

export default PlusIcon;