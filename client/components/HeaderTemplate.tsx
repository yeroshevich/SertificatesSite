import {Link} from "../interfaces/Link";
import {FC, useState} from "react";
import styles from '../styles/HeaderTemplate.module.scss';
import {Logo} from "../interfaces/Logo";
import OutsideClickHandler from 'react-outside-click-handler';
import useWindowResize from "../hooks/useWindowResize";
import Image from "next/image";

export interface HeaderTemplateProps{
    logo:Logo,
    links:Array<Link>,
    uridicalLink:Link
}

const HeaderTemplate:FC<HeaderTemplateProps> = ({logo,links,uridicalLink}) => {
    const s = useWindowResize(768,()=>closeBurgerMenu())
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
                        <img src={logo.url} alt={logo.alt?logo.alt:''} title={logo.title}/>
                    </a>
                </div>
                <div className={styles.menu}>
                    {
                        links.map((link,index)=>
                            <nav key={index}><a href={link.link}>{link.title}</a></nav>
                        )
                    }
                    <nav>
                        <a href={uridicalLink.link}>
                            {uridicalLink.title}
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
                            links.map((link,index)=>
                                <nav key={index}>
                                    <div>
                                        <a href={link.link}>{link.title}</a>
                                    </div>
                                </nav>
                            )
                        }
                        <nav>
                            <div>
                                <a href={uridicalLink.link}>
                                    {uridicalLink.title}
                                </a>
                            </div>
                        </nav>
                    </div>
                </>
            }
        </div>
    );
};

export default HeaderTemplate;