import styles from '../styles/TopScroll.module.scss'
import {useEffect, useState} from "react";
import {UpOutlined} from "@ant-design/icons";

const TopScroll = () => {

    const [visible,setVisible] = useState<boolean>(false)

    const handleWindowScroll = ()=>{
        if(window.scrollY > 300)
            setVisible(true)
        else
            setVisible(false)
    }

    useEffect(()=>{
        document.addEventListener('scroll',handleWindowScroll)
    },[])

    const handleClickToTop = ()=>{
        window.scrollTo(0,0)
    }
    return (
        <>
            {
                visible &&
                <div
                    className={styles.scrollBlock}
                    onClick={handleClickToTop}
                >
                   <div>
                       <i>
                           <UpOutlined />
                       </i>
                   </div>
                </div>
            }
        </>
    );
};

export default TopScroll;