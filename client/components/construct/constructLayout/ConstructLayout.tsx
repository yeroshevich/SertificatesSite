import React, {ReactNode} from 'react';
import styles from "../physicalConstruct/PhysicalConscruct.module.scss";
import Buttons from "../buttons/Buttons";

interface ConstructLayoutProps{
    children:ReactNode,
    saveClick:()=>void,
    reloadClick:()=>void
}

const ConstructLayout = ({children,saveClick,reloadClick}:ConstructLayoutProps) => {
    return (
        <div className={styles.content}>
            <div>
                {children}
            </div>
            <Buttons cancel={reloadClick} save={saveClick}>
            </Buttons >
        </div>
    );
};

export default ConstructLayout;