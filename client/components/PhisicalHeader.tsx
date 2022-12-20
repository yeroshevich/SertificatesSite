import {Link} from "../interfaces/Link";
import {FC, useState} from "react";
import styles from '../styles/PhisicalHeader.module.scss';
import {Logo} from "../interfaces/Logo";
import OutsideClickHandler from 'react-outside-click-handler';
import useWindowResize from "../hooks/useWindowResize";

interface PhisicalHeaderProps{
    logo:Logo,
    links:Array<Link>
}

const PhisicalHeader:FC<PhisicalHeaderProps> = ({logo,links}) => {
    const s = useWindowResize(768,()=>closeBurgerMenu)
    const [burgerIsVisible,setBurgerVisible] = useState(false)

    const openBurgerMenu = ()=>{
        setBurgerVisible(prev=>!prev)
    }
    const closeBurgerMenu = ()=>{
        setBurgerVisible(false)
    }

    return (
        <div className={styles.headerBlock}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <a href={logo.href}>
                        <img src={logo.url} alt={logo.alt} title={logo.title}/>
                    </a>
                </div>
                <div className={styles.menu}>
                    {
                        links.map(link=>
                            <nav><a href={link.link}>{link.title}</a></nav>
                        )
                    }
                    <nav>
                        <a href="#">
                            Для юридических лиц
                        </a>
                    </nav>
                </div>
                <div className={styles.burgerBlock}>
                    <OutsideClickHandler onOutsideClick={closeBurgerMenu}>
                        <div
                            onClick={openBurgerMenu}
                            className={styles.hamburgerMenu}>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                        </div>
                    </OutsideClickHandler>
                </div>
            </header>
            {
                <>
                    <div className={styles.burgerMenu +' '+(burgerIsVisible ? styles.visibleBurger:styles.hiddenBurger)}>
                        {
                            links.map(link=>
                                <nav>
                                    <div>
                                        <a href={link.link}>{link.title}</a>
                                    </div>
                                </nav>
                            )
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default PhisicalHeader;